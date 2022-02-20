package dboperation

import "github.com/SystemEngineeringTeam/HackU-2021-vol3/models"

func CreateFeedback(f models.Feedback) error {
	db := connect()

	if err := db.Create(&f).Error; err != nil {
		return err
	}

	return nil
}

func SelectFeedbacks(eventID int) ([]models.Feedback, error) {
	db := connect()

	var feedbacks []models.Feedback

	if err := db.Preload("User").Where("event_id = ?", eventID).Find(&feedbacks).Error; err != nil {
		return nil, err
	}

	return feedbacks, nil
}
