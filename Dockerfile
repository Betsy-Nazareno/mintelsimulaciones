FROM node:16-alpine
WORKDIR /app
ENV REACT_APP_BACK_URL=http://api:8000/api
COPY package*.json ./
COPY ./build .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve","-s"]