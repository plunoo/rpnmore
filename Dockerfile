FROM node:20-alpine

WORKDIR /app

# Install dependencies (including devDeps for tsx and build tools)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build React frontend
RUN npm run build

# Runtime environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npx", "tsx", "server.ts"]
