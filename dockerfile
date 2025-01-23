# Use Node.js base image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./

# Install NVM and set Node.js 16
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 22 \
    && nvm use 22

RUN npm install

# Copy project files
COPY . .

# Build the frontend
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Use Node.js 16 before running the app
CMD ["bash", "-c", "nvm use 16 && npm run dev"]
