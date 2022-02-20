package dboperation

import (
	"log"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func init() {
	db := connect()

	if err := db.AutoMigrate(&models.User{}, &models.Image{}, &models.Tag{}, &models.Badge{}, &models.Status{}, &models.Event{}); err != nil {
		log.Fatal(err)
	}

	user := models.User{
		Name:            "test",
		ProfileImageURL: "test",
		FirebaseUID:     "test",
	}
	if err := db.Find(&user).Error; err != nil {
		log.Fatal(err)
	}

	if user.ID == 0 {

		b := models.Badge{
			Badge: "test",
		}
		if err := db.Create(&b).Error; err != nil {
			log.Fatal(err)
		}

		s := []models.Status{
			{
				Status: "schedule",
			},
			{
				Status: "onair",
			},
			{
				Status: "archive",
			},
		}

		if err := db.Create(&s).Error; err != nil {
			log.Fatal(err)
		}

		// create a new user
		u := models.User{
			Name:            "test",
			FirebaseUID:     "test",
			ProfileImageURL: "test",
			BadgeID:         b.ID,
		}
		if err := db.Create(&u).Error; err != nil {
			log.Fatal(err)
		}

		// create new tags
		tags := []models.Tag{
			{Tag: "test"},
			{Tag: "test2"},
		}
		if err := db.Create(tags).Error; err != nil {
			log.Fatal(err)
		}

		// create a new event
		e := models.Event{
			Title:       "test",
			Description: "test",
			Document:    "test",
			DateTime:    "test",
			StreamURL:   "test",
			Image:       models.Image{ImageURL: "test"},
			Tags:        tags,
			Organizer:   u,
			StatusID:    s[0].ID,
		}
		if err := db.Create(&e).Error; err != nil {
			log.Fatal(err)
		}
	}
}

func connect() *gorm.DB {
	// connect to the database
	gormDB, err := gorm.Open(mysql.Open("docker:docker@tcp(localhost:33063)/app-db?charset=utf8&parseTime=True&loc=Local"), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	return gormDB
}
