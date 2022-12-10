package item

import (
	"strconv"

	"github.com/gin-gonic/gin"
)

func (h *Handler) InitRoutes() {
	h.router.GET(`/`, h.GetItems)
	h.router.GET(`/chapter/:id`, h.GetPages)
	h.router.GET(`/:link`, h.GetOneItem)
}

func (h *Handler) GetItems(ctx *gin.Context) {
	ctx.JSON(200, h.service.GetItems(ctx))
}

func (h *Handler) GetOneItem(ctx *gin.Context) {
	link := ctx.Param(`link`)

	service, err := h.service.GetOneItem(link)
	if err != nil {
		ctx.JSON(404, gin.H{`error`: `not found`})
		return
	}

	ctx.JSON(200, service)
}

func (h *Handler) GetPages(ctx *gin.Context) {
	chapter, _ := strconv.Atoi(ctx.Param(`id`))

	service := h.service.GetPages(chapter)

	ctx.JSON(200, service)
}
