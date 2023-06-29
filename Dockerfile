FROM node:16.20.1

WORKDIR /app

COPY ["package.json", "package-lock.json, ./"]

RUN apt-get update && apt-get install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
