FROM node:10-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8090
CMD [ "npm", "start" ]