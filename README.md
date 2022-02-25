![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)
[![Twitter: set\_official](https://img.shields.io/twitter/follow/set\_official.svg?style=social)](https://twitter.com/set\_official)
![issue](https://img.shields.io/github/issues/SystemEngineeringTeam/HackU-2021-vol3?style=flat-square)
[![SUSHI-WARE LICENSE](https://img.shields.io/badge/license-SUSHI--WARE%F0%9F%8D%A3-blue.svg)](https://github.com/MakeNowJust/sushi-ware)

# Welcome to S.S.R. (Shared Study Room) 👋

![cE0Y17s](https://user-images.githubusercontent.com/26848713/155747280-03a6c3ec-89bc-4bd3-bceb-757f224a5f47.jpg)


## description 

> オンライン勉強会は、主催者も受講者もとても手間がかかる！という思いから作られた、オンライン勉強会プラットフォームです。主催者は資料や配信URLなどの共有ができ、参加者は1つのウィンドウで資料・配信・チャットを見ることができます。

### 🏠 [Homepage](https://hack-u-2021-vol3.vercel.app/)

## Author

👤 **SystemEngineeringTeam**

* Website: https://set1.ie.aitech.ac.jp
* Twitter: [@set\_official](https://twitter.com/set\_official)
* Github: [@SystemEngineeringTeam](https://github.com/SystemEngineeringTeam)

##  Installation

**開発をするには、前提条件としてNode.jsとGoLang、Docker/DockerComposeの導入が必須となります。**


初めに、GitHubからクローンします。

```
$ git clone git@github.com:SystemEngineeringTeam/HackU-2021-vol3.git

$ cd HackU-2021-vol3
```

次に、バックエンドの構築をします。

```
$ make all
$ cd backend
$ go run main.go
```

更に、フロントエンドの構築をします。

```
$ cd ..\front\
$ yarn
$ yarn dev
```

これで、開発を行うことが出来ます。

## Contributing
私たちはコントリビュートを歓迎致します。
何かしらのバグなどが発生した場合などは、プロジェクトをフォークしてプルリクエストを開いてください。
