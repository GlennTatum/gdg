FROM node:alpine

COPY . app

WORKDIR app

RUN npm install -g @ionic/cli native-run cordova-res

RUN npm install

ENTRYPOINT [ "ionic" ]

CMD ["serve", "--host", "0.0.0.0"]