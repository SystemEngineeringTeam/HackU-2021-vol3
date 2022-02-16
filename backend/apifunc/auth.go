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
	err := godotenv.Load("firebase/.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	//envファイルからcredentials(秘密鍵)を取得
	/*CREDENTIALSはfirebaseの設定で作成したjsonファイルのパス,以下のような感じでcredentials.envにCREDENTIALSを記述
	CREDENTIALS=/Users/<ユーザ名>/firebase/<Firebase SDKの秘密鍵の名前>.json
	*/
	ctx := r.Context()
	if ctx == nil {
		ctx = context.Background()
	}

	opt := option.WithCredentialsFile(os.Getenv("CREDENTIALS"))
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		fmt.Printf("Cannot initialize firebase app: %v\n", err)
	}
	auth, err := app.Auth(ctx)
	if err != nil {
		fmt.Printf("Cannot initialize firebase auth: %v\n", err)
	}

	header := r.Header.Get("Authorization") //クライアントからJWTを取得する
	token_id := strings.Replace(header, "Bearer ", "", 1)
	fmt.Println(token_id)
	//JWTのベリファイ
	token, err := auth.VerifyIDToken(ctx, token_id)
	if err != nil { //認証に失敗した場合(JWTが不正な場合)は、401エラーを返す
		fmt.Printf("Cannot verify token_id: %v\n", err)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	log.Printf("Verified ID token: %v\n", token)

	uid := token.Claims["user_id"]
	log.Printf("Verified user_id: %v\n", uid)

	w.Write([]byte("OK\n"))
	w.WriteHeader(http.StatusOK)
}
