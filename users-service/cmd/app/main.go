package main

import (
	"fmt"
	"log"
	"users-service/internal/config"
)

func main() {
	cfg, err := config.Init()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(cfg.Server.Port)
}
