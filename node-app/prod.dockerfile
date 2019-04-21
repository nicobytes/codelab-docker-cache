FROM node:11.14.0

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install --production

EXPOSE 3000
COPY . /app/

CMD npm run start:prod