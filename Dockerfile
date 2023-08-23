FROM node:16.17.0 AS build

ENV FRONTEND_APP_HOME=/apps

ENV FRONTEND_LOCAL_HOME=./frontend

WORKDIR $FRONTEND_APP_HOME

COPY $FRONTEND_LOCAL_HOME/package.json $FRONTEND_LOCAL_HOME/yarn.lock ./

RUN yarn install

COPY $FRONTEND_LOCAL_HOME/. .

RUN yarn run build

FROM nginx:alpine

ENV FRONTEND_LOCAL_HOME=./frontend

ENV FRONTEND_APP_HOME=/apps

WORKDIR $FRONTEND_APP_HOME

RUN rm /etc/nginx/conf.d/default.conf

COPY $FRONTEND_LOCAL_HOME/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build $FRONTEND_LOCAL_HOME/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
