FROM node:20

WORKDIR /app


RUN corepack enable

# Copy the package files
COPY package*.json ./

# Install with Yarn (more reliable with native deps)
RUN yarn install

# Copy rest of app
COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
