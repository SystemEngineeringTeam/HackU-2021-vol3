package models

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	FirebaseUID     string
	Name            string
	ProfileImageURL string
}

type Event struct {
	gorm.Model
	Title       string
	Description string
	Document    string
	ImageID     uint
	Image       Image
	OrganizerID uint
	Organizer   User
	DateTime    string
	StreamURL   string
	Tags        []Tag `gorm:"many2many:event_tags;"`
}

// type FeedBack struct {
//  gorm.Model
// 	EventID int
// 	UserID  int
// 	Stars   int
// 	Comment string
// }

// type Comments struct {
//  gorm.Model
// 	EventID int
// 	UserID  int
// 	Comment string
// }

type Tag struct {
	gorm.Model
	Tag string
}

type Badges struct {
	gorm.Model

	Badge string
}

type Image struct {
	gorm.Model
	ImageURL string
}
