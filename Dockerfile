FROM node:16-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

ENV PORT=3000
CMD ["yarn", "start"]

EXPOSE 3000
