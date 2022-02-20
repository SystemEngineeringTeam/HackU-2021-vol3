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

	router.Methods("POST", "OPTIONS").Path("/auth").HandlerFunc(apifunc.Auth)
	//VerifyCheckをハンドラに登録,http.HandlerFuncとほぼ同じ動作.
	router.Methods("GET").Path("/images").HandlerFunc(apifunc.ImagesGetHandler)

	router.Methods("GET").Path("/user").HandlerFunc(apifunc.IdGetHandler)
	router.Methods("POST").Path("/user").HandlerFunc(apifunc.UserPostHandler)
	router.Methods("PUT").Path("/user").HandlerFunc(apifunc.UserPutHandler)
	router.HandleFunc("/user/{id}", apifunc.IdGetHandler)

	router.Methods("POST", "OPTIONS").Path("/register").HandlerFunc(apifunc.RegisterIdPostHandler)
	router.HandleFunc("/user/{id}", apifunc.RegisterIdPostHandler)

	router.Methods("GET").Path("/event/{id}").HandlerFunc(apifunc.EventIdGetHandler)
	router.Methods("GET").Path("/event").HandlerFunc(apifunc.EventGetHandler)
	router.Methods("POST", "OPTIONS").Path("/event").HandlerFunc(apifunc.EventPostHandler)
	router.Methods("POST").Path("/event/{id}").HandlerFunc(apifunc.StreamURLPostHandler)
	// router.Methods("PUT").Path("/event/{id}").HandlerFunc(apifunc.EventPutHandler)
	router.Methods("POST").Path("/event/{id}/feedback").HandlerFunc(apifunc.FeedbackPostHandler)
	router.Methods("GET").Path("/event/{id}/feedback").HandlerFunc(apifunc.FeedbackGetHandler)

	router.Methods("GET").Path("/event/hosted/{user_id}").HandlerFunc(apifunc.EventHostedHandler)
	router.Methods("GET").Path("/event/joined/{user_id}").HandlerFunc(apifunc.EventJoinedHandler)

	log.Fatal(http.ListenAndServe(":8080", router))

}
