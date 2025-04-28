FROM --platform=linux/amd64 node:20

WORKDIR /app

# Set environment variable to skip optional dependencies
ENV ROLLUP_SKIP_NODEJS_NATIVE=1

RUN corepack enable

# Copy the package files
COPY package*.json ./

# Install with better flags for cross-platform compatibility
RUN yarn install --network-timeout 600000

# Copy rest of app
COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]