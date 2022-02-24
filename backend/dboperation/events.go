package dboperation

import (
	"fmt"
	"time"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func CreateEvent(e models.EventPostRequest, firebaseUID string) error {
	db := connect()
	closer, err := db.DB()
	if err != nil {
		return err
	}
	defer closer.Close()

	u, err := GetUserByFirebaseUID(firebaseUID)
	if err != nil {
		return err
	}

	tags := []models.Tag{}
	for _, t := range e.Tags {
		dt := models.Tag{}
		dt.ID = uint(t)
		tags = append(tags, dt)
	}

	dt, err := time.Parse(timeFormat, e.DateTime)
	if err != nil {
		return err
	}
	event := models.Event{
		Title:       e.Title,
		Description: e.Description,
		Document:    e.Document,
		ImageID:     uint(e.ImageID),
		OrganizerID: u.ID,
		DateTime:    dt,
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
	// closer, err := db.DB()
	// if err != nil {
	// 	return err
	// }
	// defer closer.Close()

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
	closer, err := db.DB()
	if err != nil {
		return nil, err
	}
	defer closer.Close()

	keyword = "%" + keyword + "%"

	status = "%" + status + "%"

	var events []models.Event
	if err := db.Model(&models.Event{}).Preload("Image").Preload("Participants").Preload("Tags").Joins("Status").Joins("Organizer").Where("title like ?", keyword).Where("Status like ?", status).Order("id").Find(&events).Error; err != nil {
		return nil, err
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
		fmt.Println(e.Participants)
		tags := []string{}
		for _, t := range e.Tags {
			tags = append(tags, t.Tag)
		}

		r := models.EventGetResponse{
			ID:           e.ID,
			Title:        e.Title,
			ImageURL:     e.Image.ImageURL,
			Organizer:    e.Organizer.Name,
			DateTime:     e.DateTime.Format(timeFormat),
			Tags:         tags,
			Participants: len(e.Participants),
			Status:       e.Status.Status,
		}

		eventsResponse = append(eventsResponse, r)
	}

	return eventsResponse, nil
}

func SelectEventByID(id int) (models.EventWithIDGetResponse, error) {
	db := connect()
	closer, err := db.DB()
	if err != nil {
		return models.EventWithIDGetResponse{}, err
	}
	defer closer.Close()

	var event models.Event
	if err := db.Model(&event).Joins("Organizer").Joins("Image").Preload("Tags").Where("events.id = ?", id).First(&event).Error; err != nil {
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
		DateTime:  event.DateTime.Format(timeFormat),
		StreamURL: event.StreamURL,
		Tags:      tags,
	}

	return response, nil
}

func UpdateStreamURL(id int, streamURL string) error {
	db := connect()
	closer, err := db.DB()
	if err != nil {
		return err
	}
	defer closer.Close()

	event := models.Event{
		StreamURL: streamURL,
	}
	event.ID = uint(id)

	if err := db.Table("events").Where("id=?", id).Update("stream_url", streamURL).Update("status_id", 2).Error; err != nil {
		return err
	}

	return nil
}

func UpdateEventStatus() error {
	db := connect()
	closer, err := db.DB()
	if err != nil {
		return err
	}
	defer closer.Close()

	if err := db.Model(&models.Event{}).Where("status_id=2").Update("status_id", 3).Error; err != nil {
		return err
	}

	return nil
}
