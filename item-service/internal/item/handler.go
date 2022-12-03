package user

import (
	"item-service/internal/config"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	router  *gin.Engine
	config  *config.Config
	service *Service
}

func New(cfg *config.Config) *Handler {
	return &Handler{
		router:  gin.New(),
		config:  cfg,
		service: InitService(),
	}
}

func (h *Handler) InitRoutes() {
	h.router.GET(`/`, h.GetItems)
}
