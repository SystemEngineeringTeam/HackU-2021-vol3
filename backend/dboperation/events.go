package dboperation

import (
	"fmt"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func CreateEvent(e models.EventPostRequest, firebaseUID string) error {
	db := connect()

	u, err := getUserByFirebaseUID(firebaseUID)
	if err != nil {
		return err
	}

	tags := []models.Tag{}
	for _, t := range e.Tags {
		dt := models.Tag{}
		dt.ID = uint(t)
		tags = append(tags, dt)
	}

	event := models.Event{
		Title:       e.Title,
		Description: e.Description,
		Document:    e.Document,
		ImageID:     uint(e.ImageID),
		OrganizerID: u.ID,
		DateTime:    e.DateTime,
		Tags:        tags,
		StatusID:    1,
	}

	if err := db.Create(&event).Error; err != nil {
		return err
	}

	return nil
}

func UpdateEvent(e models.EventPutRequest, id int) error {
	// db := connect()

	// event := models.Event{
	// 	ID:          id,
	// 	Title:       e.Title,
	// 	Description: e.Description,
	// 	DateTime:    e.DateTime,
	// 	StreamURL:   e.StreamURL,
	// 	// ImageID:     e.ImageID,
	// }

	// if err := db.Table("event_tags").Where("event_id = ?", id).Delete(&models.EventTags{}).Error; err != nil {
	// 	return err
	// }

	// if err := db.Table("events").Where("id=?", id).Update(&event).Error; err != nil {
	// 	return err
	// }

	// eventTags := make([]interface{}, 0)
	// for _, t := range e.Tags {
	// 	eventTags = append(eventTags, models.EventTags{
	// 		EventID: event.ID,
	// 		TagID:   t,
	// 	})
	// }

	// if err := gormbulk.BulkInsert(db, eventTags, 3000); err != nil {
	// 	return err
	// }

	return nil
}

// SelectEventsは，イベントを取得する関数です．

func SelectEvents(keyword, status string, tags []string, page int) ([]models.EventGetResponse, error) {
	db := connect()

	keyword = "%" + keyword + "%"

	status = "%" + status + "%"

	var events []models.Event
	if err := db.Debug().Model(&events).Preload("Tags").Joins("Status").Joins("Organizer").Where("title like ?", keyword).Where("Status like ?", status).Order("id").Find(&events).Error; err != nil {
		return nil, err
	}

	for _, v := range events {
		fmt.Println(v.ID)
	}

	var responseEvents []models.Event
	for _, e := range events {
		if !e.ContainsAllTags(tags) {
			continue
		}
		responseEvents = append(responseEvents, e)
	}

	const pageSize = 10

	if page < 1 {
		page = 1
	}
	responseEvents = responseEvents[(page-1)*pageSize:]

	if len(responseEvents) > pageSize {
		responseEvents = responseEvents[:pageSize]
	}

	fmt.Println(len(responseEvents))

	var eventsResponse []models.EventGetResponse
	for _, e := range responseEvents {

		tags := []string{}
		for _, t := range e.Tags {
			tags = append(tags, t.Tag)
		}

		r := models.EventGetResponse{
			ID:        e.ID,
			Title:     e.Title,
			ImageURL:  e.Image.ImageURL,
			Organizer: e.Organizer.Name,
			DateTime:  e.DateTime,
			Tags:      tags,
		}

		eventsResponse = append(eventsResponse, r)
	}

	return eventsResponse, nil
}

func SelectEventByID(id int) (models.EventWithIDGetResponse, error) {
	db := connect()

	var event models.Event
	if err := db.Model(&event).Joins("Organizer").Preload("Tags").Where("events.id = ?", id).First(&event).Error; err != nil {
		return models.EventWithIDGetResponse{}, err
	}

	var tags []string
	for _, t := range event.Tags {
		tags = append(tags, t.Tag)
	}

	response := models.EventWithIDGetResponse{
		ID:          event.ID,
		Title:       event.Title,
		Description: event.Description,
		Document:    event.Document,
		ImageURL:    event.Image.ImageURL,
		Organizer: struct {
			ID              uint   `json:"id"`
			Name            string `json:"name"`
			ProfileImageURL string `json:"profileImageURL"`
		}{
			ID:              event.Organizer.ID,
			Name:            event.Organizer.Name,
			ProfileImageURL: event.Organizer.ProfileImageURL,
		},
		DateTime:  event.DateTime,
		StreamURL: event.StreamURL,
		Tags:      tags,
	}

	return response, nil
}
