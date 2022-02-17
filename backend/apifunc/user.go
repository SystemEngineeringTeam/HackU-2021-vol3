package apifunc

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/dboperation"
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func IdGetHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.UserIdGetResponse
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	}

	fmt.Println(user.Id)
	fmt.Println(user.Name)
	fmt.Println(user.ProfileImageURL)
	fmt.Println(user.Badge)
}

func UserPostHandler(w http.ResponseWriter, r *http.Request) {

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.UserPostRequest
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	}

	fmt.Println(user.Name)
	fmt.Println(user.ProfileImageURL)

	err = dboperation.CreateUser(user.Name, user.ProfileImageURL, "firebaseUID")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)

}

func UserPutHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.UserPutRequest
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	}
	fmt.Println(user.Name)

	/*
		UserPostHandlerの時に使ったdboperation.CreateUserだとprofileImageURLが入らなくて
		何を使えば良いかわからないので代用してあります
		とってきても使わないという状態はマズイですか
		あと、コメント文をどこに書けば良いのかわからないのでここに書いています
	*/
	err = dboperation.CreateUser(user.Name, "a", "firebaseUID")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
