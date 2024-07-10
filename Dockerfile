FROM node:20.6.1

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE ${PORT}

CMD ["pnpm", "dev"]



