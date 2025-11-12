# Use nginx alpine for a lightweight image
FROM nginx:alpine

# Copy your HTML file(s) to nginx's default serving directory
COPY . /usr/share/nginx/html

# Copy custom nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080