# Backend

- 随時追記してね！

## コーディングルール

- main.go にルートを追加するとき

```main.go
func main() {
	router := mux.NewRouter()

	router.Methods("POST").Path("/hoge").HandlerFunc(apifunc.Hoge)
	router.Methods("GET").Path("/fuga").HandlerFunc(apifunc.Fuga)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## 開発環境について

- コマンド打ち直すのが面倒！
  `air`というコマンドを使うと便利．`go install github.com/cosmtrek/air@latest`でインストールできる．
