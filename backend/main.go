package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	firebase "firebase.google.com/go"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"google.golang.org/api/option"
)

func VerifyCheck(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("OK\n"))
	w.WriteHeader(http.StatusOK)
}

func MiddleWare(next_auth http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		//Firebase SDKの初期化
		op := option.WithCredentialsFile(os.Getenv("CREDENTIALS"))
		fbapp, err := firebase.NewApp(context.Background(), nil, op)
		if err != nil {
			fmt.Printf("Cannot initialize firebase app: %v\n", err)
		}
		auth, err := fbapp.Auth(context.Background())
		if err != nil {
			fmt.Printf("Cannot initialize firebase auth: %v\n", err)
		}

		header := r.Header.Get("Authorization") //クライアントからJWTを取得する
		token_id := strings.Replace(header, "Bearer ", "", 1)

		//JWTのベリファイ
		token, err := auth.VerifyIDToken(context.Background(), token_id)
		if err != nil { //認証に失敗した場合(JWTが不正な場合)は、401エラーを返す
			fmt.Printf("Cannot verify token_id: %v\n", err)
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		log.Printf("Verified ID token: %v\n", token)
		next_auth(w, r)
	}
}

func main() {
	allowOrigins := handlers.AllowedOrigins([]string{"*"})
	allowMethods := handlers.AllowedMethods([]string{"GET"})
	allowHeaders := handlers.AllowedHeaders([]string{"Authorization"})
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
	router.HandleFunc("/auth", MiddleWare()) //http.HandleFuncと同じ役割
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(allowOrigins, allowMethods, allowHeaders)(router)))
}
