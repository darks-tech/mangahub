package main

import (
	"item-service/internal/config"
	"item-service/internal/user"
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
