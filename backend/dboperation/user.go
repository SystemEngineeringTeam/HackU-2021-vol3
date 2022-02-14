package dboperation

import (
	"errors"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func Auth(firebaseUID string) error {
	db := connect()
	defer db.Close()

	var user models.User
	db.Where("firebase_uid = ?", firebaseUID).First(&user)
	if user.ID == 0 {
		// user not found
		return errors.New("user not found")
	}
	// user found
	return nil
}
