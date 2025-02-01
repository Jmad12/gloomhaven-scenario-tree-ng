FROM node:10.18
WORKDIR /apps
COPY . .
RUN npm install
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]