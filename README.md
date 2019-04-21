![Imgur](https://i.imgur.com/2ZPHl8t.png)

# 1.

```
FROM node:latest

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 3000

CMD npm run start:dev
```

# 3.
```
docker-compose build 
docker-compose up -d
```

# 4.

- .dockeringore
```
node_modules
*.gitignore
Dockerfile
*.dockerfile
```

# 5.
```
FROM node:11.14.0

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

EXPOSE 3000
COPY . /app/

CMD npm run start:dev
```

# 6.
```
volumes:
  - ./node-app:/app
  - /app/node_modules/
```

# 7
```
docker-compose exec node-app bash
npm list --depth 0
```


# 7.
- prod.dockerfile
```
FROM node:11.14.0

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install --production

EXPOSE 3000
COPY ./ /app/

CMD npm run start:prod
```

# 8.
```
docker-compose build 
docker-compose -f docker-compose.prod.yml build 
```