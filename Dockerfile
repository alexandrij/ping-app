FROM nginx-unprivileged:1.29-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy sis-frontend config
COPY ./nginx/default.conf /etc/nginx/conf.d

# Copy built assets
COPY --chown=nginx:nginx ./dist/ /usr/share/nginx/html

EXPOSE 80
