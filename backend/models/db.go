package models

type User struct {
	ID          int    `gorm:"id"`
	FirebaseUID string `gorm:"firebase_uid"`
	Name        string `gorm:"name"`
}

type Event struct {
	ID          int    `gorm:"id"`
	Title       string `gorm:"title"`
	Description string `gorm:"description"`
	Document    string `gorm:"document"`
	DateTime    string `gorm:"datetime"`
	Limit       int    `gorm:"limit"`
}

type FeedBack struct {
	EventID int    `gorm:"event_id"`
	UserID  int    `gorm:"user_id"`
	Stars   int    `gorm:"stars"`
	Comment string `gorm:"comment"`
}

type Comments struct {
	EventID int    `gorm:"event_id"`
	UserID  int    `gorm:"user_id"`
	Comment string `gorm:"comment"`
}

type Tags struct {
	ID  int    `gorm:"id"`
	Tag string `gorm:"tag"`
}

type Badges struct {
	ID    int    `gorm:"id"`
	Badge string `gorm:"badge"`
}
