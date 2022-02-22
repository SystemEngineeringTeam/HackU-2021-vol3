package apifunc

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
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

	result, err := verifyCheck(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	err = dboperation.CreateUser(user.Name, user.ProfileImageURL, result["FirebaseUID"])
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

func UserGetHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	user, err := verifyCheck(r)
	if err != nil {
		log.Println(err)
	}
	fmt.Println(user["FirebaseUID"])

	userid, err := dboperation.GetUserByFirebaseUID(user["FirebaseUID"])
	if userid.ID != 0 { //res.status: 200
		w.WriteHeader(http.StatusOK)
	}
	if userid.ID == 0 { //res.status: 400
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println(userid.Name)

}
