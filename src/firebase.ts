import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

async function testConnection() {
  try {
    // Attempt to fetch a non-existent doc just to check connectivity
    await getDocFromServer(doc(db, 'health', 'connection-test'));
    console.log("Firebase Frontend Connection: OK");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Firebase configuration error: Client is offline. Please check your Firebase setup.");
    }
  }
}

testConnection();
