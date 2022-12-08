FROM node:latest
WORKDIR /var/www

COPY . /var/www/

RUN mkdir -p /var/www \
  && cd /var/www \
  && npm install \
  && npm run build 

EXPOSE 3000

CMD node server.js