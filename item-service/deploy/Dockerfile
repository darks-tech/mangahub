FROM golang:1.19-alpine3.16 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o item-service ./cmd/app/

FROM alpine:latest
WORKDIR /app
COPY --chown=65534:65534 --from=builder /app/item-service ./item-service
COPY --chown=65534:65534 --from=builder /app/config/config.yml ./config/config.yml
USER 65534

ENTRYPOINT ["./item-service"]