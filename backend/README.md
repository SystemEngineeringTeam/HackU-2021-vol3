# Backend

- 随時追記してね！

## コーディングルール

- main.go にルートを追加するとき

```main.go
func main() {
	router := mux.NewRouter()

	router.Path("/auth").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET","POST","PUT","DELETE"))
	router.Path("/hoge").Methods("GET").HandlerFunc(apifunc.Hoge)
	router.Path("/hoge").Methods("POST").HandlerFunc(apifunc.Hoge)
	router.Path("/hoge").Methods("PUT").HandlerFunc(apifunc.Hoge)
	router.Path("/hoge").Methods("DELETE").HandlerFunc(apifunc.Hoge)

	router.Path("/auth").Methods("OPTIONS").HandlerFunc(apifunc.OptionsHandler("GET"))
	router.Path("/fuga/{id}").Methods("GET").HandlerFunc(apifunc.Fuga)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## 開発環境について

- コマンド打ち直すのが面倒！
  `air`というコマンドを使うと便利．`go install github.com/cosmtrek/air@latest`でインストールできる．
