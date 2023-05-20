FROM node:16.15.0-alpine

RUN mkdir -p /var/www/beka-cloud
WORKDIR /var/www/beka-cloud

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
