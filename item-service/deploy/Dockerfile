FROM golang:1.19-alpine3.16 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o auth-service ./cmd/app/

FROM alpine:latest
WORKDIR /app
COPY --chown=65534:65534 --from=builder /app/auth-service ./auth-service
COPY --chown=65534:65534 --from=builder /app/config.yml ./config.yml
USER 65534

ENTRYPOINT ["./auth-service"]