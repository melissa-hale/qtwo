# Use nginx alpine for a lightweight image
FROM nginx:alpine

# Copy your HTML file(s) to nginx's default serving directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# nginx alpine image already has a CMD to start nginx
# No additional CMD needed