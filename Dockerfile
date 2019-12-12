FROM alpine as build
COPY modular-app/ /tmp/modular-app
RUN apk add --no-cache nodejs npm git
WORKDIR /tmp

RUN npm install -g @angular/cli ionic cordova angular typescript
RUN npm i -g cordova-res cordova-hot-code-push-cli --unsafe-perm
WORKDIR /tmp/modular-app/
