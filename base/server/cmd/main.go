package main

import (
	api "api/service"
	"fmt"
	"net/http"
)

func main() {
	r := api.App()
	port := 3000
	fmt.Println("Server listening on port: ", port)
	http.ListenAndServe(fmt.Sprintf(":%v", port), r)
}
