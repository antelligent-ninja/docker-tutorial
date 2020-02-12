    FROM node:12.14.0

RUN echo "VERSION 0.1.0"

ADD ./ /app/

WORKDIR /app
RUN ls \
    &&  npm install \
    && touch debug.log
WORKDIR /app

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]