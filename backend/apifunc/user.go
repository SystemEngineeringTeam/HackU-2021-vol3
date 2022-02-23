package apifunc

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/dboperation"
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
	"github.com/gorilla/mux"
)

func IdGetHandler(w http.ResponseWriter, r *http.Request) {

	vars := mux.Vars(r) //パスパラメータ取得

	fmt.Println(vars["id"])

	var i int
	i, _ = strconv.Atoi(vars["id"])
	fmt.Println(i)

	user, err := dboperation.SelectUserByID(i)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	j, err := json.Marshal(user)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(j))
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w, string(j))
}

func UserPostHandler(w http.ResponseWriter, r *http.Request) {

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.UserPostRequest
	if err := json.Unmarshal(b, &user); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
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
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	fmt.Println(user.Name)

	err = dboperation.UpdateUser(user.Name, user.ProfileImageURL, "firebaseUID")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
