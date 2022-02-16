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

func Auth(w http.ResponseWriter, r *http.Request) {
	uid, err := verifyCheck(r)
	if err != nil {
		log.Println(err)
	}
	fmt.Println(uid)
}

func verifyCheck(r *http.Request) (string, error) {

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
	conf := &firebase.Config{ProjectID: os.Getenv("PROJECT_ID")}
	//OAuth2.0更新トークン対応用
	app, err := firebase.NewApp(ctx, conf, opt)
	//OAuth2.0を用いない場合はconfをnilにする
	if err != nil {
		fmt.Printf("Cannot initialize firebase app: %v\n", err)
	}
	auth, err := app.Auth(ctx)
	if err != nil {
		fmt.Printf("Cannot initialize firebase auth: %v\n", err)
	}

	header := r.Header.Get("X-auth-token") //クライアントからJWTを取得する
	tokenID := strings.Replace(header, "Bearer ", "", 1)
	//fmt.Println(token_id)
	//JWTのベリファイ
	gotToken, err := auth.VerifyIDToken(ctx, tokenID)
	if err != nil { //認証に失敗した場合(JWTが不正な場合)は、401エラーを返す
		fmt.Printf("Cannot verify token_id: %v\n", err)
		return "", err
	}
	log.Printf("Verified ID token: %v\n", gotToken)

	uid := gotToken.UID //認証に成功した場合はuidを取得する
	log.Printf("Verified user_id: %v\n", uid)

	return uid, nil
}
