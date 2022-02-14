package main

import (
	"log"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/apifunc"
	"github.com/gorilla/mux"
)

func CORS(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
}

func main() {

	/*
			func Handler(w http.ResponseWriter, r *http.Request) {
			  w.Header().Set("Access-Control-Allow-Origin", "*")
			  w.Header().Set("Access-Control-Allow-Headers", "Authorization")
			  w.Header().Set("Access-Control-Allow-Methods", "GET")
		  }
			のような動作と同じ

			ここでオリジン、メソッド、ヘッダの許可を設定する
			ヘッダはAuthorizationを用いた認証を行うため、これが許可されている
			メソッドはトークンを受け取るためGETのみ
	*/

	router := mux.NewRouter()
	router.Handlefunc("/", CORS)
	router.HandleFunc("/auth", apifunc.VerifyCheck) //http.HandleFuncと同じ役割
	log.Fatal(http.ListenAndServe(":8080", nil))
}
