FROM node:16.17.0 AS build

ENV FRONTEND_APP_HOME=/apps

WORKDIR $FRONTEND_APP_HOME

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY ./. .

RUN yarn run build

# FROM nginx:alpine

# ENV FRONTEND_APP_HOME=/apps

# WORKDIR $FRONTEND_APP_HOME

# RUN rm /etc/nginx/conf.d/default.conf

# # You should consider the access permission of certs file on ec2, if you want to deploy the source code.
# COPY ./ssl_cerfificate/letsencrypt/live/www.cowabugi.com/fullchain.pem /etc/letsencrypt/live/www.cowabugi.com/fullchain.pem
# COPY ./ssl_cerfificate/letsencrypt/live/www.cowabugi.com/privkey.pem /etc/letsencrypt/live/www.cowabugi.com/privkey.pem

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# RUN ls -al

# COPY --from=build $FRONTEND_APP_HOME/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
