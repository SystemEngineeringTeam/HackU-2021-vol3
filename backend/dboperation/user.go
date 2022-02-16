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

func CreateUser(name, profileImageURL, firebaseUID string) error {
	db := connect()
	defer db.Close()

	var user models.User
	user.Name = name
	user.ProfileImageURL = profileImageURL
	user.FirebaseUID = firebaseUID
	if err := db.Create(&user).Error; err != nil {
		return err
	}
	return nil
}
