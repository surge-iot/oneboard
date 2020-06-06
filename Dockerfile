FROM node:lts as build-stage
LABEL version="0.0.1"
LABEL maintainer="shinjan@cse.iitb.ac.in"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine as master
LABEL version="0.0.1"
LABEL maintainer="shinjan@cse.iitb.ac.in"


COPY --from=build-stage /app/dist/oneboard-ui /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
