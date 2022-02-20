package dboperation

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"math/rand"
	"strconv"
	"testing"
	"time"

	"github.com/SystemEngineeringTeam/HackU-2021-vol3/models"
)

func TestCreateEvent(t *testing.T) {
	rand.Seed(time.Now().Unix())
	r := rand.Intn(100)
	str := "http://google.com/" + strconv.Itoa(r)
	h := sha256.Sum256([]byte(str))
	str = hex.EncodeToString(h[:])

	e := models.EventPostRequest{
		Title:       str,
		Description: str,
		Document:    str,
		DateTime:    time.Now().Format("2006-01-02T15:04:05+09:00"),
		Tags:        []int{1},
		ImageID:     1,
	}

	err := CreateEvent(e, "test")
	if err != nil {
		t.Error(err)
	}
	db := connect()

	var event models.Event
	db.Where("title = ?", str).First(&event)
	fmt.Println(event)
}

// func TestUpdateEvent(t *testing.T) {
// 	r := rand.Intn(100)
// 	e := models.EventPutRequest{
// 		Title:       "hoge",
// 		Description: "test",
// 		DateTime:    "20220101000000",
// 		StreamURL:   "http://google.com/" + strconv.Itoa(r),
// 		ImageID:     1,
// 		Tags:        []int{1, 2, 3, 4},
// 	}

// 	err := UpdateEvent(e, 1)
// 	if err != nil {
// 		t.Error(err)
// 	}
// 	db := connect()

// 	var event models.Event
// 	db.Model(&event).Where("title = ?", "hoge").First(&event)
// 	fmt.Println(event)
// }

func TestSelectEvents(t *testing.T) {
	events, err := SelectEvents("", "", nil, 0)
	if err != nil {
		t.Error(err)
	}

	for _, e := range events {
		fmt.Println(e.Title)
	}
}

func TestSelectEvent(t *testing.T) {
	event, err := SelectEventByID(1)
	if err != nil {
		t.Error(err)
	}
	fmt.Println(event)
}
