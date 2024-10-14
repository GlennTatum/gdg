package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func App() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Get("/", hello)

	return r
}

func hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Welcome to Tigers!"))
}
