FROM node:alpine

# Create app directory
RUN mkdir -p /app
COPY . /app
WORKDIR /app

# Install app dependencies
RUN yarn install

# Build the app
RUN npm run-script build

# Start the server
EXPOSE 3000
CMD [ "npm", "run-script", "start:production" ]
