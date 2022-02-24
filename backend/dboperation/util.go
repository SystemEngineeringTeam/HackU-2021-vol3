package dboperation

import (
	"flag"
	"fmt"
	"log"
	"time"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const (
	timeFormat = "2006-01-02T15:04:05+09:00"
)

func init() {
	db := connect()
	closer, err := db.DB()
	if err != nil {
		return
	}
	defer closer.Close()

	if err := db.AutoMigrate(&models.Image{}, &models.Tag{}, &models.Badge{}, &models.User{}, &models.Status{}, &models.Event{}, &models.Feedback{}); err != nil {
		log.Fatal(err)
	}

	var c int64
	if db.Model(&models.Image{}).Count(&c); c == 0 {
		db.Create([]models.Image{
			{ImageURL: "cloud-service"},
			{ImageURL: "computer"},
			{ImageURL: "database-storage"},
			{ImageURL: "devops"},
			{ImageURL: "graphic-design"},
			{ImageURL: "microchip"},
			{ImageURL: "security"},
			{ImageURL: "server"},
			{ImageURL: "smartphone"},
			{ImageURL: "web"},
		})
	}

	if db.Model(&models.Tag{}).Count(&c); c == 0 {
		db.Create([]models.Tag{
			{Tag: "FRONTED"},
			{Tag: "BACKEND"},
			{Tag: "INFRA"},
			{Tag: "NETWORK"},
			{Tag: "SECURITY"},
			{Tag: "MOBILE"},
			{Tag: "DESIGN"},
			{Tag: "CLOUD"},
			{Tag: "HARDWARE"},
			{Tag: "DEVOPS"},
			{Tag: "STUDENT"},
			{Tag: "BEGINNER"},
			{Tag: "WOMAN"},
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
			DateTime:    time.Now(),
			Tags:        t,
			StatusID:    1,
			Participants: []models.User{
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

	fmt.Println("Database initialized")
}

func connect() *gorm.DB {
	// connect to the database
	flag.Parse()

	dsn := "docker:docker@tcp(localhost:33063)/app-db?charset=utf8mb4&parseTime=True&loc=Local"

	if flag.Arg(0) == "production" {
		dsn = "docker:docker@tcp(localhost:3306)/app-db?charset=utf8mb4&parseTime=True&loc=Local"
	}

	gormDB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	fmt.Println("Connected to the database")
	return gormDB
}
