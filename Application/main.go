package main

import (
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("sound-classifier"))
	mux.Handle("/", fs)
	http.ListenAndServe(":8080", mux)
}
