FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Install Chrome dependencies
RUN apt-get update && \
    apt-get install -y wget --no-install-recommends && \
    apt-get install -y \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    libxtst6 \
    libnss3 \
    libnspr4 \
    libfontconfig1 \
    libxss1 \
    libgbm1 \
    libpango-1.0-0 \
    libcairo2 \
    libjpeg62-turbo \
    libx11-6 \
    libx11-dev \
    libgbm-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Puppeteer and download Chromium
RUN npm install puppeteer && npm install

EXPOSE 3000
CMD [ "node", "index.js" ]
