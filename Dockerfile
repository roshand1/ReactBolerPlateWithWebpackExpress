# Specify a base image
# https://hub.docker.com/_/node
FROM node:14.15.1-alpine as builder

WORKDIR /app

# Copy package.json file
# npm install only worries about changes in package.json file
# therefore when you make anychanges in other folder you don't need
# to reinstall all the necessary packages. This change will make
# build faster.
COPY ./package.json ./
# Install some dependencies
RUN npm install

# Copy your project file
COPY . .
RUN npm run build

FROM nginx

COPY --from=builder /app/public /usr/share/nginx/html
COPY --from=builder /app/app /usr/share/nginx/html

# We don't have to write start nginx as default command for ngnx is to start.
