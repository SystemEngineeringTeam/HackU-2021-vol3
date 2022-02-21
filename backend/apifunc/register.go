package apifunc

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/dboperation"
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
	fmt.Println(user["FirebaseUID"])

	userid, err := dboperation.GetUserByFirebaseUID(user["FirebaseUID"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Println(userid.ID)

	vars := mux.Vars(r) //パスパラメータ取得
	fmt.Println(vars["id"])

	j, _ := strconv.Atoi(vars["id"])
	fmt.Println(vars, j)

	err = dboperation.JoinEvent(j, int(userid.ID))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}

//参加取り消し
func RegisterIdDeteleHandler(w http.ResponseWriter, r *http.Request) {

	user, err := verifyCheck(r)
	if err != nil {
		log.Println(err)
	}
	fmt.Println(user["FirebaseUID"])

	userid, err := dboperation.GetUserByFirebaseUID(user["FirebaseUID"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Println(userid.ID)

	vars := mux.Vars(r) //パスパラメータ取得
	fmt.Println(vars["id"])

	j, _ := strconv.Atoi(vars["id"])
	fmt.Println(vars, j)

	err = dboperation.LeaveEvent(j, int(userid.ID))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
