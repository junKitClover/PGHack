FROM node:lts
WORKDIR /
COPY package.json yarn.lock ./
RUN yarn install
# RUN npm install

COPY . /

EXPOSE 3000
CMD ["yarn", "dev"]
# CMD ["npm", "run", "dev"]
