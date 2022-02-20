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
	events, err := dboperation.SelectEvents()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	response := make([]models.EventGetResponse, 0)
	for _, event := range events {
		e := models.EventGetResponse{
			ID:        event.ID,
			Title:     event.Title,
			ImageURL:  event.ImageURL,
			Organizer: event.Organizer,
			DateTime:  event.DateTime,
			Tags:      event.Tags,
		}
		response = append(response, e)
	}

	j, err := json.Marshal(response)
	if err != nil {
		fmt.Println(err)
	}
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
	fmt.Println(string(j))
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w, string(j))
}

func EventPostHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")

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
	// vars := mux.Vars(r)
	// id, _ := strconv.Atoi(vars["id"])

	// event, err := dboperation.SelectEventByID(id)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusBadRequest)
	// 	return
	// }
	// streamURL := event.StreamURL
	// fmt.Println(streamURL)

	// err = dboperation.UpdateStreamURL(streamURL, id)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusBadRequest)
	//  return
	// }

	// w.WriteHeader(http.StatusOK)
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
func FeedbackPostHandler(w http.ResponseWriter, r *http.Request) {
	/*

		WIP

	*/

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var feedback models.FeedbackPostRequest
	var user models.UserIdGetResponse

	if err := json.Unmarshal(b, &feedback); err != nil {
		fmt.Println(err)
	}
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	} //UserIDをどうやって取得するか？

	fmt.Println(user.ID)
	fmt.Println(feedback.Comment)
	fmt.Println(feedback.Stars)

	vars := mux.Vars(r)
	eventID, _ := strconv.Atoi(vars["id"])

	fmt.Println(vars, eventID)

	// e := models.FeedBack{
	// 	EventID: eventID,
	// 	UserID:  user.Id,
	// 	Stars:   feedback.Stars,
	// 	Comment: feedback.Comment,
	// }

	// err = dboperation.CreateFeedback(e)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// 	return
	// }
	w.WriteHeader(http.StatusCreated)
}
