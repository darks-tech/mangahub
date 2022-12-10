package item

import (
	"item-service/internal/config"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	router  *gin.Engine
	config  *config.Config
	service *Service
}

func New(cfg *config.Config, service *Service) *Handler {
	return &Handler{
		router:  gin.New(),
		config:  cfg,
		service: service,
	}
}
