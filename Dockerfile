FROM node:16.17.0 AS build

ENV $FRONT_HOME=./frontend

WORKDIR /frontend

COPY $FRONT_HOME/package.json $FRONT_HOME/yarn.lock ./

RUN yarn install

COPY $FRONT_HOME/. .

RUN yarn run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY $FRONT_HOME/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build $FRONT_HOME/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]