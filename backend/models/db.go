package models

type User struct {
	ID              int    `gorm:"column:id"`
	FirebaseUID     string `gorm:"column:firebase_uid"`
	Name            string `gorm:"column:name"`
	ProfileImageURL string `gorm:"column:profile_image_url"`
}

type Event struct {
	ID          int    `gorm:"column:id"`
	Title       string `gorm:"column:title"`
	Description string `gorm:"column:description"`
	Document    string `gorm:"column:document"`
	DateTime    string `gorm:"column:datetime"`
	Organizer   int    `gorm:"column:organizer"`
	StreamURL   string `gorm:"column:stream_url"`
}

type FeedBack struct {
	EventID int    `gorm:"column:event_id"`
	UserID  int    `gorm:"column:user_id"`
	Stars   int    `gorm:"column:stars"`
	Comment string `gorm:"column:comment"`
}

type Comments struct {
	EventID int    `gorm:"column:event_id"`
	UserID  int    `gorm:"column:user_id"`
	Comment string `gorm:"column:comment"`
}

type Tags struct {
	ID  int    `gorm:"column:id"`
	Tag string `gorm:"column:tag"`
}

type Badges struct {
	ID    int    `gorm:"column:id"`
	Badge string `gorm:"column:badge"`
}

type Image struct {
	ID       int    `gorm:"column:id"`
	ImageURL string `gorm:"column:image_url"`
}
