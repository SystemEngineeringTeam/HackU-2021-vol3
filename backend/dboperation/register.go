package dboperation

import "github.com/SystemEngineeringTeam/HackU-2021-vol3/models"

func JoinEvent(eventID, userID int) error {
	db := connect()

	event := models.Event{}
	event.ID = uint(eventID)
	user := models.User{}
	user.ID = uint(userID)

	if err := db.Model(&event).Association("Parcitipants").Append(&user); err != nil {
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

	if err := db.Model(&event).Association("Parcitipants").Delete(&user); err != nil {
		return err
	}

	return nil
}
