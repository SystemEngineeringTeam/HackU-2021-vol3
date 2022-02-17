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
	router.Methods("GET").Path("/images").HandlerFunc(apifunc.ImagesGetHandler)

	router.Methods("GET").Path("/user").HandlerFunc(apifunc.IdGetHandler)
	router.Methods("POST").Path("/user").HandlerFunc(apifunc.UserPostHandler)
	router.Methods("PUT").Path("/user").HandlerFunc(apifunc.UserPutHandler)
	router.HandleFunc("/user/{id}", apifunc.IdGetHandler)

	log.Fatal(http.ListenAndServe(":8080", router))

}
