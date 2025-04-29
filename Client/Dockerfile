FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies (inside the container -> Linux build)
RUN npm install

# Now copy the rest of your app code
COPY . .

# Expose the dev server port
EXPOSE 5173

# Start the dev server
CMD ["npm", "run", "dev"]