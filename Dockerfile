FROM node:8.12.0
# Create a directory where our app will be placed
WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app/package.json
RUN npm install

COPY app.js /bot


EXPOSE 8000