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
	router.Path("/user").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.UserPostHandler))
	router.Path("/user").Methods("PUT").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.UserPutHandler))
	router.Path("/user").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.UserGetHandler))

	router.Path("/user/{id:[0-9]+}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/user/{id:[0-9]+}").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.IdGetHandler))

	// event
	router.Path("/event").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST"))
	router.Path("/event").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventGetHandler))
	router.Path("/event").Methods("POST", "OPTIONS").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventPostHandler))

	router.Path("/event/{id:[0-9]+}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST"))
	router.Path("/event/{id:[0-9]+}").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventIdGetHandler))
	router.Path("/event/{id:[0-9]+}").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.StreamURLPostHandler))

	router.Path("/event/{id:[0-9]+}/feedback").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET", "POST"))
	router.Path("/event/{id:[0-9]+}/feedback").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.FeedbackGetHandler))
	router.Path("/event/{id:[0-9]+}/feedback").Methods("POST", "OPTIONS").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.FeedbackPostHandler))

	router.Path("/event/hosted").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/event/hosted").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventHostedHandler))

	router.Path("/event/joined").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/event/joined").Methods("GET").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.EventJoinedHandler))

	router.Path("/event/register/{id:[0-9]+}").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("POST", "DELETE"))
	router.Path("/event/register/{id:[0-9]+}").Methods("POST").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.RegisterIdPostHandler))
	router.Path("/event/register/{id:[0-9]+}").Methods("DELETE").HandlerFunc(apifunc.AllowCorsMiddleware(apifunc.RegisterIdDeteleHandler))

	log.Fatal(http.ListenAndServe(":8080", router))
}
