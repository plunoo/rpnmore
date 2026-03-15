import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import admin from "firebase-admin";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;

// Load Firebase Config
const firebaseConfigPath = path.join(process.cwd(), "firebase-applet-config.json");
let firebaseConfig: any = {};
try {
  firebaseConfig = JSON.parse(fs.readFileSync(firebaseConfigPath, "utf-8"));
} catch (e) {
  console.warn("firebase-applet-config.json not found or invalid — Firebase disabled");
}

// Initialize Firebase Admin
// Supports FIREBASE_SERVICE_ACCOUNT_KEY env var (JSON string) for Dokploy/VPS deployments,
// falls back to applicationDefault() for Google Cloud/AI Studio environments.
let db: admin.firestore.Firestore | null = null;
try {
  if (!admin.apps.length) {
    let credential;
    if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        credential = admin.credential.cert(serviceAccount);
        console.log("Firebase Admin: using service account from env");
      } catch (e) {
        console.error("FIREBASE_SERVICE_ACCOUNT_KEY is invalid JSON, falling back to applicationDefault()");
        credential = admin.credential.applicationDefault();
      }
    } else {
      credential = admin.credential.applicationDefault();
    }
    admin.initializeApp({
      credential,
      projectId: firebaseConfig.projectId,
      databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`,
    });
  }
  db = admin.firestore();
  console.log("Firebase Admin: initialized");
} catch (e) {
  console.warn("Firebase Admin init failed — falling back to in-memory store:", (e as Error).message);
}

// Placeholder Data
const PLACEHOLDER_SERVICES = [
  {
    id: '1',
    title: 'AI Branding Strategy',
    description: 'Data-driven brand identities crafted by neural networks.',
    category: 'Strategy',
    icon: 'Layout',
    imageUrl: 'https://picsum.photos/seed/brand/800/600'
  },
  {
    id: '2',
    title: 'Neural Art Generation',
    description: 'Custom digital masterpieces generated from your vision.',
    category: 'Creative',
    icon: 'Palette',
    imageUrl: 'https://picsum.photos/seed/art/800/600'
  }
];

const PLACEHOLDER_POSTS = [
  {
    id: 'p1',
    title: 'The Future of AI in Design',
    excerpt: 'How generative models are reshaping the creative landscape.',
    content: 'Full content placeholder...',
    imageUrl: 'https://picsum.photos/seed/future/800/600',
    date: 'March 11, 2026',
    author: 'RPNMORE AI',
    tags: ['AI', 'Design']
  }
];

// In-memory store for "Placeholder Mode"
let memoryServices = [...PLACEHOLDER_SERVICES];
let memoryPosts = [...PLACEHOLDER_POSTS];

// Initialize Postgres Pool (Backup)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost") ? false : { rejectUnauthorized: false },
});

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000");

  app.use(express.json());

  // Initialize Postgres Tables
  try {
    if (process.env.DATABASE_URL) {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS services (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT,
          category TEXT,
          icon TEXT,
          image_url TEXT,
          long_description TEXT,
          updates TEXT,
          additional_info TEXT,
          external_link TEXT,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE IF NOT EXISTS posts (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          excerpt TEXT,
          content TEXT,
          image_url TEXT,
          date TEXT,
          author TEXT,
          tags TEXT[],
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log("Postgres tables initialized");
    }
  } catch (err) {
    console.error("Postgres init skipped (Placeholder Mode active)");
  }

  // Admin password verification — uses runtime env var ADMIN_PASSWORD (never baked into frontend)
  app.post("/api/admin/verify", (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || "rpnmore-admin";
    if (password === adminPassword) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, error: "Invalid password" });
    }
  });

  // API Routes
  app.get("/api/db-status", async (_req, res) => {
    const status = {
      firebase: "placeholder",
      postgres: "placeholder",
    };

    try {
      if (db && firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("TODO")) {
        await db.collection("health").doc("check").set({ lastCheck: new Date() });
        status.firebase = "connected";
      }
    } catch (err) {
      status.firebase = "placeholder";
    }

    try {
      if (process.env.DATABASE_URL) {
        await pool.query("SELECT 1");
        status.postgres = "connected";
      } else {
        status.postgres = "not configured";
      }
    } catch (err) {
      status.postgres = "error";
    }

    res.json(status);
  });

  // Services API
  app.get("/api/services", async (_req, res) => {
    try {
      if (db && firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("TODO")) {
        const snapshot = await db.collection("services").get();
        if (!snapshot.empty) {
          return res.json(snapshot.docs.map(doc => doc.data()));
        }
      }
      res.json(memoryServices);
    } catch (err) {
      res.json(memoryServices);
    }
  });

  app.post("/api/services", async (req, res) => {
    const services = req.body;
    memoryServices = services; // Update memory store
    
    try {
      // Try Firebase
      if (db) {
        const batch = db.batch();
        services.forEach((s: any) => {
          const ref = db!.collection("services").doc(s.id);
          batch.set(ref, s);
        });
        await batch.commit();
      }

      // Try Postgres
      if (process.env.DATABASE_URL) {
        for (const s of services) {
          await pool.query(`
            INSERT INTO services (id, title, description, category, icon, image_url, long_description, updates, additional_info, external_link)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            ON CONFLICT (id) DO UPDATE SET
              title = EXCLUDED.title,
              description = EXCLUDED.description,
              category = EXCLUDED.category,
              icon = EXCLUDED.icon,
              image_url = EXCLUDED.image_url,
              long_description = EXCLUDED.long_description,
              updates = EXCLUDED.updates,
              additional_info = EXCLUDED.additional_info,
              external_link = EXCLUDED.external_link,
              updated_at = CURRENT_TIMESTAMP
          `, [s.id, s.title, s.description, s.category, s.icon, s.imageUrl, s.longDescription, s.updates, s.additionalInfo, s.externalLink]);
        }
      }
    } catch (err) {
      console.log("Save to DB skipped (Saved to Memory)");
    }
    res.json({ success: true });
  });

  // Posts API
  app.get("/api/posts", async (_req, res) => {
    try {
      if (db && firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("TODO")) {
        const snapshot = await db.collection("posts").orderBy("date", "desc").get();
        if (!snapshot.empty) {
          return res.json(snapshot.docs.map(doc => doc.data()));
        }
      }
      res.json(memoryPosts);
    } catch (err) {
      res.json(memoryPosts);
    }
  });

  app.post("/api/posts", async (req, res) => {
    const post = req.body;
    memoryPosts = [post, ...memoryPosts]; // Update memory store
    
    try {
      if (db) await db.collection("posts").doc(post.id).set(post);

      if (process.env.DATABASE_URL) {
        await pool.query(`
          INSERT INTO posts (id, title, excerpt, content, image_url, date, author, tags)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          ON CONFLICT (id) DO UPDATE SET
            title = EXCLUDED.title,
            excerpt = EXCLUDED.excerpt,
            content = EXCLUDED.content,
            image_url = EXCLUDED.image_url,
            date = EXCLUDED.date,
            author = EXCLUDED.author,
            tags = EXCLUDED.tags,
            updated_at = CURRENT_TIMESTAMP
        `, [post.id, post.title, post.excerpt, post.content, post.imageUrl, post.date, post.author, post.tags]);
      }
    } catch (err) {
      console.log("Save post to DB skipped (Saved to Memory)");
    }
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
