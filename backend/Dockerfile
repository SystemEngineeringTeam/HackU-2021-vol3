FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY . /app

RUN go build -o a.out

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/a.out /app

CMD [ "./a.out","production" ]