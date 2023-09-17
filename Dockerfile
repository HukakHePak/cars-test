FROM node:16-slim as build
COPY . .
RUN npm i && npm run build

FROM scratch
COPY --from=build build .
CMD ["./setup"]