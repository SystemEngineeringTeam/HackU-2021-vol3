package apifunc

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/dboperation"
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func ImagesGetHandler(w http.ResponseWriter, r *http.Request) {
	images, err := dboperation.SelectAllImages()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := make([]models.ImageGetResponse, 0)

	for _, img := range images {
		r := models.ImageGetResponse{

			URL: img.ImageURL,
		}
		response = append(response, r)
	}

	b, err := json.Marshal(response)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Fprint(w, string(b))
}
