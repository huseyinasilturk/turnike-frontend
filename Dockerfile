FROM node:alpine as build
WORKDIR /build
COPY package.json /build 
RUN npm install

FROM nginx:alpine
ADD . /usr/share/nginx/html/
COPY --from=build /build /usr/share/nginx/html/
EXPOSE 80
