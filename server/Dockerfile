# pull official base image
FROM node:22

# set working directory
WORKDIR /server

RUN corepack enable
RUN yarn set version stable

# install app dependencies
COPY package.json .

# add app
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["yarn", "serve"]