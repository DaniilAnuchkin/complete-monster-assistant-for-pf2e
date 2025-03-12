# pull official base image
FROM node:22

# set working directory
WORKDIR /client

RUN corepack enable
RUN yarn set version stable

# install app dependencies
COPY package.json .

# add app
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 5173
CMD ["yarn", "preview"]
