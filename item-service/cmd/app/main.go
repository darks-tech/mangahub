package main

import (
	"item-service/internal/config"
	user "item-service/internal/item"
	"log"
)

func main() {
	cfg, err := config.Init()
	if err != nil {
		log.Fatal(err)
	}

	server := user.New(cfg)
	server.InitRoutes()
	server.Start()
}
