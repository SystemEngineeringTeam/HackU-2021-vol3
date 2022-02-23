package dboperation

import (
	"fmt"
	"testing"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func TestCreateFeedback(T *testing.T) {
	f := models.Feedback{
		EventID: 1,
		UserID:  1,
		Stars:   1,
		Comment: "test",
	}

	err := CreateFeedback(f)
	if err != nil {
		T.Error(err)
	}
}

func TestSelectFeedbacks(T *testing.T) {
	feedbacks, err := SelectFeedbacks(1)
	if err != nil {
		T.Error(err)
	}

	if len(feedbacks) == 0 {
		T.Error("no feedbacks found")
	}

	fmt.Println(feedbacks[0].User.Name)
}
