package dboperation

import (
	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
	gormbulk "github.com/t-tiger/gorm-bulk-insert/v2"
)

func CreateEvent(e models.EventPostAndDeleteRequest, firebaseUID string) error {
	db := connect()
	defer db.Close()

	u, err := getUserByFirebaseUID(firebaseUID)
	if err != nil {
		return err
	}

	event := models.Event{
		Title:       e.Title,
		Description: e.Description,
		Document:    e.Document,
		DateTime:    e.DateTime,
		Organizer:   u.ID,
		StreamURL:   e.StreamURL,
	}

	if err := db.Create(&event).Error; err != nil {
		return err
	}

	eventTags := make([]interface{}, 0)
	for _, t := range e.Tags {
		eventTags = append(eventTags, models.EventTags{
			EventID: event.ID,
			TagID:   t,
		})
	}

	gormbulk.BulkInsert(db, eventTags, 3000)

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
