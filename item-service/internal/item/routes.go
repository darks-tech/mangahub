package item

import (
	"log"

	"github.com/gin-gonic/gin"
)

func (h *Handler) InitRoutes() {
	h.router.GET(`/`, h.GetItems)
	h.router.GET(`/:link`, h.GetOneItem)
}

func (h *Handler) GetItems(ctx *gin.Context) {
	ctx.JSON(200, h.service.GetItems())
}

func (h *Handler) GetOneItem(ctx *gin.Context) {
	item, err := ctx.Params.Get(`link`)
	if !err {
		log.Println(err)
	}

	ctx.JSON(200, item)
}
