FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY . /app

RUN go build -o a.out

FROM alpine:latest

WORKDIR /app

RUN apk add tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  echo "Asia/Tokyo" > /etc/timezone && \
  apk del tzdata

COPY --from=builder /app/a.out /app

CMD [ "./a.out","production" ]