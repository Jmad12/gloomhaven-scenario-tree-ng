FROM node:10.24.1
WORKDIR /apps
COPY . .
RUN npm install
EXPOSE 4200
CMD ["npm", "run", "start"]