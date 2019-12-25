FROM node:10-alpine
ENV NODE_ENV production
ENV PORT 3000 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]