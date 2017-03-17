FROM node:alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install

# Bundle app source
COPY . /app

# Build the app
RUN npm run-script build

# Start the server
EXPOSE 3000
CMD [ "npm", "run-script", "start:production" ]

