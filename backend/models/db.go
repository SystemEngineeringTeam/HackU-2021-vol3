package models

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	FirebaseUID     string `gorm:"not null;unique;"`
	Name            string `gorm:"not null;"`
	ProfileImageURL string `gorm:"not null;"`
	BadgeID         uint
	Badge           Badge
	JoinedEvents    []Event `gorm:"many2many:event_parcitipants;"`
}

type Event struct {
	gorm.Model
	Title        string `gorm:"not null"`
	Description  string `gorm:"not null"`
	Document     string `gorm:"not null"`
	ImageID      uint   `gorm:"not null"`
	Image        Image
	OrganizerID  uint `gorm:"not null"`
	Organizer    User
	DateTime     string `gorm:"not null"`
	FeedBacks    []Feedback
	StreamURL    string
	Tags         []Tag  `gorm:"many2many:event_tags;"`
	Parcitipants []User `gorm:"many2many:event_parcitipants;"`
	StatusID     uint   `gorm:"not null"`
	Status       Status
}

func (e *Event) ContainsAllTags(tags []string) bool {
	for _, t := range tags {
		if !e.ContainsTag(t) {
			return false
		}
	}
	return true
}

func (e *Event) ContainsTag(tag string) bool {
	for _, t := range e.Tags {
		if t.Tag == tag {
			return true
		}
	}
	return false
}

type Status struct {
	gorm.Model
	Status string
}

type Feedback struct {
	gorm.Model
	EventID int `gorm:"uniqueIndex:event_user_feedback;not null;"`
	UserID  int `gorm:"uniqueIndex:event_user_feedback;not null;"`
	User    User
	Stars   uint   `gorm:"not null"`
	Comment string `gorm:"not null"`
}

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

type Badge struct {
	gorm.Model
	Badge string
}

type Image struct {
	gorm.Model
	ImageURL string
}
