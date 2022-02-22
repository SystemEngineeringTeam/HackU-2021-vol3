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

func EventGetHandler(w http.ResponseWriter, r *http.Request) {
	events, err := dboperation.SelectEvents("Go-Handson", "準備中", []string{"Go"}, 1)
	//キーワード，ステータス，タグ，ページの取得
	//for test use
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	j, err := json.Marshal(events)
	if err != nil {
		fmt.Println(err)
	}
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(j))
}

func EventIdGetHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])
	//get pathparameter
	//fmt.Println(vars, id)

	event, err := dboperation.SelectEventByID(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	j, err := json.Marshal(event)
	if err != nil {
		fmt.Println(err)
		return
	}
	//fmt.Println(string(j))
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w, string(j))
}

func EventPostHandler(w http.ResponseWriter, r *http.Request) {

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var event models.EventPostRequest

	if err := json.Unmarshal(b, &event); err != nil {
		fmt.Println(err)
	}

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	user, err := verifyCheck(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	uid := user["FirebaseUID"]

	err = dboperation.CreateEvent(event, uid) //create event
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func StreamURLPostHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])

	event, err := dboperation.SelectEventByID(id)
	if err != nil || event.ID == 0 {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var s models.StreamURLPostRequest

	if err := json.Unmarshal(b, &s); err != nil {
		fmt.Println(err)
	}

	streamURL := s.StreamURL

	err = dboperation.UpdateStreamURL(id, streamURL)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func EventPutHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var event models.EventPutRequest

	if err := json.Unmarshal(b, &event); err != nil {
		fmt.Println(err)
	}

	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])
	//get pathparameter
	//fmt.Println(vars, id)

	err = dboperation.UpdateEvent(event, id)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)

}

func FeedbackGetHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])

	feedbacks, err := dboperation.SelectFeedbacks(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	response := make([]models.FeedbackGetResponse, 0)
	for _, feedback := range feedbacks {
		f := models.FeedbackGetResponse{
			EventID:     feedback.EventID,
			Comment:     feedback.Comment,
			Stars:       int(feedback.Stars),
			CommentedBy: feedback.User.Name,
		}
		response = append(response, f)
	}

	j, err := json.Marshal(response)
	if err != nil {
		fmt.Println(err)
	}
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(j))
}

func FeedbackPostHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	user, err := verifyCheck(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	uid := user["FirebaseUID"]

	userInfo, err := dboperation.GetUserByFirebaseUID(uid)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var feedback models.FeedbackPostRequest

	if err := json.Unmarshal(b, &feedback); err != nil {
		fmt.Println(err)
	}

	// fmt.Println(feedback.Comment)
	// fmt.Println(feedback.Stars)

	vars := mux.Vars(r)
	eventID, _ := strconv.Atoi(vars["id"])

	//fmt.Println(vars, eventID)

	e := models.Feedback{
		EventID: eventID,
		UserID:  int(userInfo.ID),
		User:    userInfo,
		Stars:   uint(feedback.Stars),
		Comment: feedback.Comment,
	}

	err = dboperation.CreateFeedback(e)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func EventHostedHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userID, _ := strconv.Atoi(vars["user_id"])

	//fmt.Println(vars, userID)

	events, err := dboperation.SelectHostedEvents(userID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	j, err := json.Marshal(events)
	if err != nil {
		fmt.Println(err)
	}
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(j))
}

func EventJoinedHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userID, _ := strconv.Atoi(vars["user_id"])

	//fmt.Println(vars, userID)

	events, err := dboperation.SelectRegisteredEvents(userID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	j, err := json.Marshal(events)
	if err != nil {
		fmt.Println(err)
	}
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(j))
}
