package dboperation

import "github.com/SystemEngineeringTeam/HackU-2021-vol3/models"

func CreateEvent(e models.Event) error {
	db := connect()
	defer db.Close()

	if err := db.Create(&e).Error; err != nil {
		return err
	}
	return nil
}

func UpdateEvent(e models.Event) error {
	db := connect()
	defer db.Close()

	if err := db.Table("events").Where("id=?", e.ID).Update(&e).Error; err != nil {
		return err
	}
	return nil
}
