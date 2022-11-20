package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", mainHandler)
	http.ListenAndServe(":8080", nil)
}

func mainHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "welcome home")
}
