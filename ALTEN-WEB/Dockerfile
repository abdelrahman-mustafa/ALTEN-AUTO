FROM node:10-alpine
RUN npm i -g @angular/cli
RUN npm i 
ENV NODE_ENV production
RUN ng serve 
COPY . .
EXPOSE 4200
CMD [ "npm", "start" ]