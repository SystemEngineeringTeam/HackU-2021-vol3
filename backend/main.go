package main

import (
	"log"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/apifunc"
)

func main() {
	http.HandleFunc("/auth", apifunc.VerifyCheck) //VerifyCheckをハンドラに登録
	log.Fatal(http.ListenAndServe(":8080", nil))
}
