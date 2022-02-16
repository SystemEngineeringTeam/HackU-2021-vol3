package apifunc

import (
	"encoding/json"
	"fmt"
<<<<<<< HEAD
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/dboperation"
=======
	"io/ioutil"
	"net/http"

>>>>>>> 2fd1dfb501190c8916ab6b78ae43e833901c270f
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func ImagesGetHandler(w http.ResponseWriter, r *http.Request) {
<<<<<<< HEAD
	images, err := dboperation.SelectAllImages()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := make([]models.ImageGetResponse, 0)

	for _, img := range images {
		r := models.ImageGetResponse{
			ID:  img.ID,
			URL: img.ImageURL,
		}
		response = append(response, r)
	}

	b, err := json.Marshal(response)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Fprint(w, string(b))
=======
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err)
	}

	var user models.Image
	if err := json.Unmarshal(b, &user); err != nil {
		fmt.Println(err)
	}
	fmt.Println(user.ID)
	fmt.Println(user.ImageURL)

>>>>>>> 2fd1dfb501190c8916ab6b78ae43e833901c270f
}
