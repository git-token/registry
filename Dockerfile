FROM node:6.11.0

RUN npm i -g yarn
RUN npm i -g babel-cli

WORKDIR /gittoken-registry

ADD . .

RUN npm install
RUN npm run build

ENTRYPOINT yarn run start
