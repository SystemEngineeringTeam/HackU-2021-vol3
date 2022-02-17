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


func UpdateUser(name, profileImageURL, firebaseUID string) error {
	db := connect()
	defer db.Close()

	var err error
	// 名前のみ，プロフィール画像のみの変更に対応(必要ないかも)
	if name == "" && profileImageURL != "" {
		err = db.Model(&models.User{}).Where("firebase_uid = ?", firebaseUID).Update("profile_image_url", profileImageURL).Error
	} else if name != "" && profileImageURL == "" {
		err = db.Model(&models.User{}).Where("firebase_uid = ?", firebaseUID).Update("name", name).Error
	} else if name != "" && profileImageURL != "" {
		err = db.Model(&models.User{}).Where("firebase_uid = ?", firebaseUID).Updates(models.User{Name: name, ProfileImageURL: profileImageURL, FirebaseUID: firebaseUID}).Error
	}

	if err != nil {
		return err
	}

	return nil
}

func SelectUserByID(id int) (models.User, error) {
	db := connect()
	defer db.Close()

	var user models.User
	if err := db.Where("id = ?", id).First(&user).Error; err != nil {
		return user, err
	}
	return user, nil
}
