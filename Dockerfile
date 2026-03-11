FROM node:20-alpine

WORKDIR /app

# Install dependencies (including devDeps for tsx and build tools)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build-time arg for admin password (baked into frontend bundle by Vite)
ARG VITE_ADMIN_PASSWORD
ENV VITE_ADMIN_PASSWORD=$VITE_ADMIN_PASSWORD

# Build React frontend
RUN npm run build

# Runtime environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npx", "tsx", "server.ts"]
