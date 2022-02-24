package dboperation

import (
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func JoinEvent(eventID, userID int) error {
	db := connect()

	event := models.Event{}
	event.ID = uint(eventID)
	user := models.User{}
	user.ID = uint(userID)

	if err := db.Model(&event).Association("Participants").Append(&user); err != nil {
		return err
	}

	return nil
}

func LeaveEvent(eventID, userID int) error {
	db := connect()

	event := models.Event{}
	event.ID = uint(eventID)
	user := models.User{}
	user.ID = uint(userID)

	if err := db.Model(&event).Association("Participants").Delete(&user); err != nil {
		return err
	}

	return nil
}

func SelectJoinedEvents(firebaseUID string) ([]models.UsersEventResponse, error) {
	db := connect()

	user := models.User{}

	if err := db.Model(&models.User{}).Preload("JoinedEvents").Preload("JoinedEvents.Image").Where("firebase_uid = ?", firebaseUID).First(&user).Error; err != nil {
		return nil, err
	}

	var events []models.UsersEventResponse
	for _, e := range user.JoinedEvents {
		events = append(events, models.UsersEventResponse{
			ID:           e.ID,
			Title:        e.Title,
			ImageURL:     e.Image.ImageURL,
			Participants: len(e.Participants),
			DateTime:     e.DateTime.Format(timeFormat),
		})
	}

	return events, nil
}

func SelectHostedEvents(firebaseUID string) ([]models.UsersEventResponse, error) {
	db := connect()

	var events []models.Event

	if err := db.Model(&models.Event{}).Joins("Organizer").Joins("Image").Where("Organizer.firebase_uid = ?", firebaseUID).Find(&events).Error; err != nil {
		return nil, err
	}

	var response []models.UsersEventResponse
	for _, e := range events {
		response = append(response, models.UsersEventResponse{
			ID:           e.ID,
			Title:        e.Title,
			ImageURL:     e.Image.ImageURL,
			Participants: len(e.Participants),
			DateTime:     e.DateTime.Format(timeFormat),
		})
	}

	return response, nil
}
