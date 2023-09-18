# HukakHePak's Interpreter

An interesting awesome test assignment that I've ever done. nodejs is an application that can be run on windows os and communicate with my server using the console of this application. why? to be


## Run Locally

Clone the project

```bash
  git clone https://github.com/HukakHePak/cars-test.git
```

Go to the project directory

```bash
  cd cars-test
```

Install dependencies

```bash
  npm install
```

Execute .env.example

```bash
  cp .env.sample .env
```
and correct .env MONGO connection string.

By default 

Start the client

```bash
  npm run client
```

Start the server

```bash
  npm run server
```

## Docker

You can create build image and run server container via docker

```bash
  docker build . -t cars-test

  docker run -it --rm --env-file .env cars-test
```

## Build

Run build

```bash
  npm run build
```

# Serve build

```bash
  node build/server.js
```
for start server and
```bash
  node build/app.js
```
for start client console app. 

## Documentation

[Documentation](https://note-lawn.ru)