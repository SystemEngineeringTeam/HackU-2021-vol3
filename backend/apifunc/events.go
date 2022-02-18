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

func EventPostHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}
	var event models.EventPostAndDeleteRequest

	if err := json.Unmarshal(b, &event); err != nil {
		fmt.Println(err)
	}

	err = dboperation.CreateEvent(event, "") //create event
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
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

	//fmt.Println(vars, id)

	err = dboperation.UpdateEvent(event,id)

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

	if err := json.Unmarshal(b, &feedback); err != nil {
		fmt.Println(err)
	}
	fmt.Println(feedback.Comment)
	fmt.Println(feedback.Stars)

	vars := mux.Vars(r)
	eventID, _ := strconv.Atoi(vars["id"])

	fmt.Println(vars, eventID)

	// e := models.FeedBack{
	// 	EventID: eventID,
	// 	// UserID:  1,
	// 	Stars:  feedback.Stars,
	// 	Comment: feedback.Comment,
	// }

	// err = dboperation.CreateFeedback(feedback.Comment, feedback.Stars)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// 	return
	// }
	w.WriteHeader(http.StatusCreated)
}

func CommentGetHandler(w http.ResponseWriter, r *http.Request) {
	/*

		WIP

	*/

	//comments, err := dboperation.GetAllComments()
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// 	return
	// }

	vars := mux.Vars(r)
	eventID, _ := strconv.Atoi(vars["id"])

	fmt.Println(vars, eventID)

	response := make([]models.CommentGetAndPostRequest, 0)
	// for _, comm := range comments {
	// 	if eventID == dboperation.GetAllComments() {
	// 		r := models.CommentGetAndPostRequest{
	// 			Comment: comm,
	// 		}
	// 		response = append(response, r)
	// 	}
	// }

	b, err := json.Marshal(response)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Fprint(w, string(b))
}

func CommentPostHandler(w http.ResponseWriter, r *http.Request) {
	/*

		WIP

	*/
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var comm models.CommentGetAndPostRequest

	if err := json.Unmarshal(b, &comm); err != nil {
		fmt.Println(err)
	}
	fmt.Println(comm.Comment)

	vars := mux.Vars(r)
	eventID, _ := strconv.Atoi(vars["id"])

	fmt.Println(vars, eventID)

	// e := models.Comments{
	//  	EventID: eventID,
	//  	//UserID: 1,// wip
	//  	Comment: comm.Comment,
	// }

	w.WriteHeader(http.StatusCreated)
}