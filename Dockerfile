FROM node:16.17.0 AS build

ENV FRONTEND_APP_HOME=/apps

WORKDIR $FRONTEND_APP_HOME

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY ./. .

RUN yarn run build

FROM nginx:alpine

ENV FRONTEND_APP_HOME=/apps

WORKDIR $FRONTEND_APP_HOME

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx-selfsigned.crt /etc/nginx/ssl/nginx-selfsigned.crt
COPY ./nginx-selfsigned.key /etc/nginx/ssl/nginx-selfsigned.key

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN ls -al

COPY --from=build $FRONTEND_APP_HOME/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
