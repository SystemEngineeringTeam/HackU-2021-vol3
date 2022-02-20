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

//参加登録
func RegisterIdPostHandler(w http.ResponseWriter, r *http.Request) {

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

	i, _ := strconv.Atoi(vars["id"])
	fmt.Println(vars, i)

	//JoinEventに渡さなきゃいけないeventIDがどこにあるかわかんない
	var eventid int = int(event.OrganizerID)
	err = dboperation.JoinEvent(eventid, i)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}
