package dboperation

import (
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func SelectAllImages() ([]models.Image, error) {
	db := connect()
	closer, err := db.DB()
	if err != nil {
		return nil, err
	}
	defer closer.Close()

	var images []models.Image
	if err := db.Model(&images).Scan(&images).Error; err != nil {
		return nil, err
	}
	return images, nil
}
