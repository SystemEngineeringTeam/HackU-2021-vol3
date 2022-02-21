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

//参加登録
func RegisterIdPostHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	user, err := verifyCheck(r)
	if err != nil {
		log.Println(err)
	}
	fmt.Println(user)

	var i int
	i, _ = strconv.Atoi(user["id"])
	fmt.Println(i)

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var event models.Event

	if err := json.Unmarshal(b, &event); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	fmt.Println(event.Title)
	fmt.Println(event.OrganizerID)

	vars := mux.Vars(r) //パスパラメータ取得
	fmt.Println(vars["id"])

	j, _ := strconv.Atoi(vars["id"])
	fmt.Println(vars, j)

	err = dboperation.JoinEvent(j, i)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}

//参加取り消し
func RegisterIdDeteleHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	user, err := verifyCheck(r)
	if err != nil {
		log.Println(err)
	}
	fmt.Println(user)

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var name models.UserIdGetResponse

	if err := json.Unmarshal(b, &name); err != nil {
		fmt.Println(err)
	}

	//var name uint = (UserIdGetResponse.id)
	//var i int //= int(models.UserIdGetRespons)//readall??
	//i, _ = strconv.Atoi(models.UserIdGetResponse["id"])
	fmt.Println(name.ID)

	vars := mux.Vars(r) //パスパラメータ取得
	fmt.Println(vars["id"])

	j, _ := strconv.Atoi(vars["id"])
	fmt.Println(vars, j)

	err = dboperation.LeaveEvent(j, int(name.ID))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
