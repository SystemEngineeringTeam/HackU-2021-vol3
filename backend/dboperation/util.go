package dboperation

import (
	"log"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func init() {
	db := connect()

	if err := db.AutoMigrate(&models.Image{}, &models.Tag{}, &models.Badge{}, &models.User{}, &models.Status{}, &models.Event{}, &models.Feedback{}); err != nil {
		log.Fatal(err)
	}

	var c int64
	if db.Model(&models.Image{}).Count(&c); c == 0 {
		db.Create(&models.Image{
			ImageURL: "https://via.placeholder.com/140x100",
		})
	}

	if db.Model(&models.Tag{}).Count(&c); c == 0 {
		db.Create([]models.Tag{
			{
				Tag: "Go",
			},
			{
				Tag: "Node",
			},
		})
	}

	if db.Model(&models.Badge{}).Count(&c); c == 0 {
		db.Create([]models.Badge{
			{
				Badge: "Newbie",
			},
		})
	}

	var u models.User
	var u2 models.User
	if db.Model(&models.User{}).Count(&c); c == 0 {
		u = models.User{
			Name:            "test",
			FirebaseUID:     "test",
			ProfileImageURL: "https://via.placeholder.com/140x100",
			BadgeID:         1,
		}
		db.Create(&u)

		u2 = models.User{
			Name:            "test2",
			FirebaseUID:     "test2",
			ProfileImageURL: "https://via.placeholder.com/140x100",
			BadgeID:         1,
		}

		db.Create(&u2)
	}

	if db.Model(&models.Status{}).Count(&c); c == 0 {
		db.Create([]models.Status{
			{
				Status: "schedule",
			},
			{
				Status: "onair",
			},
			{
				Status: "archive",
			},
		})
	}

	var e models.Event
	if db.Model(&models.Event{}).Count(&c); c == 0 {
		t := []models.Tag{}
		db.Find(&t)

		e = models.Event{
			Title:       "test",
			Description: "test",
			Document:    "test",
			ImageID:     1,
			OrganizerID: u.ID,
			DateTime:    "2020-01-01T00:00:00+09:00",
			Tags:        t,
			StatusID:    1,
			Parcitipants: []models.User{
				u2,
			},
		}
		db.Create(&e)
	}

	if db.Model(&models.Feedback{}).Count(&c); c == 0 {
		db.Create(&models.Feedback{
			EventID: int(e.ID),
			UserID:  int(u.ID),
			Comment: "test",
			Stars:   1,
		})
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
