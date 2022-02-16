package apifunc

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func IdGetHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.UserPostRequest
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	}

	fmt.Println(user.Id)
	fmt.Println(user.Name)
	fmt.Println(user.Budge)
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

}

func UserPutHandler(w http.ResponseWriter, r *http.Request) {
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.UserPostRequest
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	}
	fmt.Println(user.Name)
}
