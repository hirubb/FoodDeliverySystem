FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies (you said Yarn, but this uses npm)
RUN npm install

# Then copy the rest of the app
COPY . .

# Expose the port your app runs on (Vite defaults to 5173)
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]