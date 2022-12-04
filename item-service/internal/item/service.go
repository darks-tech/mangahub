package item

import (
	"context"
	"log"

	"github.com/jackc/pgx/v4/pgxpool"
)

type Service struct {
	psql *pgxpool.Pool
}

func InitService(psql *pgxpool.Pool) *Service {
	return &Service{psql: psql}
}

func (s *Service) GetItems() []*Item {
	var items []*Item

	rows, err := s.psql.Query(context.Background(), `SELECT title, link, poster FROM items`)
	if err != nil {
		log.Println(err)
	}

	for rows.Next() {
		var item Item
		err := rows.Scan(&item.Title, &item.Link, &item.Poster)
		if err != nil {
			log.Println(err)
		}
		items = append(items, &item)
	}

	return items
}
