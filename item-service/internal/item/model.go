package item

type Item struct {
	Title  string `json:"title"`
	Link   string `json:"link"`
	Poster string `json:"poster"`
}

type OneItem struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Author      string   `json:"author"`
	Genres      []string `json:"genres"`
	Link        string   `json:"link"`
	Poster      string   `json:"poster"`
}

type Chapter struct{}
