# Use a base image with bash support
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Install NVM and set Node.js 22
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 22 \
    && nvm use 22

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application files
COPY . .

# Expose the frontend development port
EXPOSE 3000

# Use Node.js 22 before running the frontend application
CMD ["bash", "-c", "source $HOME/.nvm/nvm.sh && nvm use 22 && npm run dev"]
