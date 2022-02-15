package apifunc

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	firebase "firebase.google.com/go"
	"github.com/joho/godotenv"
	"google.golang.org/api/option"
)

func VerifyCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	//Access-ControlをVerifyCheck内にも適用

	//Firebase SDKの初期化
	err := godotenv.Load("../env/credentials.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	credentials := os.Getenv("CREDENTIALS")
	//envファイルからcredentials(秘密鍵)を取得

	context := context.Background()

	op := option.WithCredentialsFile(os.Getenv(credentials))
	fbapp, err := firebase.NewApp(context, nil, op)
	if err != nil {
		fmt.Printf("Cannot initialize firebase app: %v\n", err)
	}
	auth, err := fbapp.Auth(context)
	if err != nil {
		fmt.Printf("Cannot initialize firebase auth: %v\n", err)
	}

	header := r.Header.Get("Authorization") //クライアントからJWTを取得する
	token_id := strings.Replace(header, "Bearer ", "", 1)

	//JWTのベリファイ
	token, err := auth.VerifyIDToken(context, token_id)
	if err != nil { //認証に失敗した場合(JWTが不正な場合)は、401エラーを返す
		fmt.Printf("Cannot verify token_id: %v\n", err)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	log.Printf("Verified ID token: %v\n", token)
	w.Write([]byte("OK\n"))
	w.WriteHeader(http.StatusOK)
}
