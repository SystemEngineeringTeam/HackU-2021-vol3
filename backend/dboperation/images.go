package dboperation

import (
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func SelectAllImages() ([]models.Image, error) {
	db := connect()
	defer db.Close()

	var images []models.Image
	if err := db.Find(&images).Error; err != nil {
		return nil, err
	}
	return images, nil
}
