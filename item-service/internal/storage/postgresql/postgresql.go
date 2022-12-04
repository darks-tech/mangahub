package postgresql

import (
	"context"
	"item-service/internal/config"

	"github.com/jackc/pgx/v4/pgxpool"
)

func Connect(cfg *config.Config) (*pgxpool.Pool, error) {
	DB, err := pgxpool.Connect(context.Background(), `host=`+cfg.DB.Host+` user=`+cfg.DB.User+` password=`+cfg.DB.Pass+` database=`+cfg.DB.Name)
	if err != nil {
		return nil, err
	}
	return DB, nil
}
