FROM node:16-bullseye
# Light weight version of node

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# copying packages first takes advantage of docker layers
COPY package*.json ./

# Copies all files between container and local folder
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Make port 5500 available in the container
EXPOSE 5500

# The Wait tool allows the DB server to start and be
# fully ready before the app attempts connecting
# SEE https://github.com/ufoscout/docker-compose-wait
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# After the wait has executed, the app is run in 
# dev (development) mode. See package.json for dev script.
CMD /wait && npm run dev