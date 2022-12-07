FROM ubuntu:latest
WORKDIR /app
COPY ["package.json","package-lock.json","./"]
RUN apt install -y nodejs && apt install -y npm && npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD node ./server.js