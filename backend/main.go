package main

import (
	"log"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/apifunc"
	"github.com/gorilla/mux"
)

func main() {
	//ルーターの定義
	router := mux.NewRouter()

	// auth
	router.Path("/auth").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("POST"))
	router.Path("/auth").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.Auth))

	// images
	router.Path("/images").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/images").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.ImagesGetHandler))

	// user
	router.Path("/user").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST", "PUT"))
	router.Path("/user").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.IdGetHandler))
	router.Path("/user").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.UserPostHandler))
	router.Path("/user").Methods("PUT").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.UserPutHandler))

	router.Path("/user/{id}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/user/{id}").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.IdGetHandler))

	// evnet
	router.Path("/event").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST"))
	router.Path("/event").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventGetHandler))
	router.Path("/event").Methods("POST", "OPTIONS").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventPostHandler))

	router.Path("/event/{id}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST"))
	router.Path("/event/{id}").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventIdGetHandler))
	router.Path("/event/{id}").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.StreamURLPostHandler))

	router.Path("/event/{id}/feedback").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST"))
	router.Path("/event/{id}/feedback").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.FeedbackGetHandler))
	router.Path("/event/{id}/feedback").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.FeedbackPostHandler))

	router.Path("/event/hosted/{user_id}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/event/hosted/{user_id}").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventHostedHandler))

	router.Path("/event/joined/{user_id}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/event/joined/{user_id}").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventJoinedHandler))

	router.Path("/event/register/{id}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("POST"))
	router.Path("/event/register/{id}").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.RegisterIdPostHandler))

	log.Fatal(http.ListenAndServe(":8080", router))

}
