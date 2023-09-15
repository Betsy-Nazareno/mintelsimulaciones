FROM nginx:alpine
#ENV REACT_APP_BACK_URL=http://api:8000/api
COPY ./build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]