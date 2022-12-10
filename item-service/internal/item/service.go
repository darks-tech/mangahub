package item

import (
	"context"
	"errors"
	"log"

	"github.com/jackc/pgx/v4/pgxpool"
)

type Service struct {
	psql *pgxpool.Pool
}

func InitService(psql *pgxpool.Pool) *Service {
	return &Service{psql: psql}
}

func (service *Service) GetItems(ctx context.Context) []Item {
	var items []Item

	rows, err := service.psql.Query(ctx, `SELECT title, link, poster FROM items`)
	if err != nil {
		log.Println(err)
	}

	for rows.Next() {
		var item Item
		err := rows.Scan(&item.Title, &item.Link, &item.Poster)
		if err != nil {
			log.Println(err)
		}
		items = append(items, item)
	}

	return items
}

func (service *Service) GetOneItem(link string) (OneItem, error) {
	var item OneItem

	err := service.psql.QueryRow(context.Background(),
		`SELECT title, description, 
				(SELECT name FROM authors WHERE id = items.author) AS author, 
				link, poster,
				(SELECT array_agg(name) FROM genres WHERE id = any(items.genres)) AS genres
		 FROM items
		 WHERE link = $1`, link).Scan(&item.Title, &item.Description, &item.Author, &item.Link, &item.Poster, &item.Genres)
	if err != nil {
		return OneItem{}, errors.New(``)
	}

	return item, nil
}

func (service *Service) GetPages(chaptedId int) []string {
	var pages []string

	rows, err := service.psql.Query(context.Background(), `SELECT image FROM pages WHERE chapter_id = $1 ORDER BY page ASC`, chaptedId)
	if err != nil {
		log.Println(err)
	}

	for rows.Next() {
		var page string
		err := rows.Scan(&page)
		if err != nil {
			log.Println(err)
		}
		pages = append(pages, page)
	}

	return pages
}
