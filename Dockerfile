FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app

# Build the app
RUN npm run-script build

# Start the server
EXPOSE 3000
CMD [ "npm", "run-script", "start:production" ]
