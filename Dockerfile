FROM node:12.16.2

WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install --only=prod

# Copy everything else
COPY ./ ./

# Deployment port
EXPOSE 80
EXPOSE 443

# Default commands
CMD ["npm", "run", "dev"]
