FROM node:17-alpine3.14 as Build

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN mkdir .yarn

COPY .yarn ./.yarn
COPY ./.yarnrc.yml .

RUN mkdir ./packages
RUN mkdir ./packages/client ./packages/map-designer ./packages/renderer

COPY ./packages/client/package.json /usr/src/app/packages/client/
COPY ./packages/map-designer/package.json /usr/src/app/packages/map-designer/
COPY ./packages/renderer/package.json /usr/src/app/packages/renderer/

RUN yarn install

COPY . .
RUN yarn build

FROM nginx:1.21.6-alpine
COPY --from=Build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
