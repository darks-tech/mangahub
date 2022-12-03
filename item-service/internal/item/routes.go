package user

import "github.com/gin-gonic/gin"

func (h *Handler) GetItems(ctx *gin.Context) {
	ctx.JSON(200, gin.H{`hello`: `Go!`})
}
