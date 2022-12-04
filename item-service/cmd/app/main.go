package main

import (
	"item-service/internal/config"
	"item-service/internal/item"
	"item-service/internal/storage/postgresql"
	"log"
)

func main() {
	cfg, err := config.Init()
	if err != nil {
		log.Fatal(err)
	}

	psql, err := postgresql.Connect(cfg)
	if err != nil {
		log.Fatal(err)
	}

	service := item.InitService(psql)

	server := item.New(cfg, service)
	server.InitRoutes()
	server.Start()
}
