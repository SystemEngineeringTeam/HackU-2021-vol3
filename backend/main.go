package main

import (
	"log"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/apifunc"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	//ルーターの定義

	router.HandleFunc("/auth", apifunc.Auth)

	//VerifyCheckをハンドラに登録,http.HandlerFuncとほぼ同じ動作.
	log.Fatal(http.ListenAndServe(":8080", router))
}
