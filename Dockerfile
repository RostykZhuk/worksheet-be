FROM node:22

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Start the application
CMD ["sh", "-c", "npm run migration:up && npm run seed:all && npm start"]