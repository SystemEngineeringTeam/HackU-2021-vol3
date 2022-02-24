package dboperation

import (
	"fmt"
	"testing"
)

func TestJoinEvent(t *testing.T) {
	err := JoinEvent(1, 1)
	if err != nil {
		t.Error(err)
	}
}

func TestLeaveEvent(t *testing.T) {
	err := LeaveEvent(1, 1)
	if err != nil {
		t.Error(err)
	}
}

func TestSelectJoinedEvents(t *testing.T) {
	e, err := SelectJoinedEvents("test2")
	if err != nil {
		t.Error(err)
	}

	for _, i := range e {
		fmt.Println(i.Title)
	}
}

func TestSelectHostedEvents(t *testing.T) {
	e, err := SelectHostedEvents("test")
	if err != nil {
		t.Error(err)
	}

	for _, i := range e {
		fmt.Println(i.ID, i.Title)
	}
}
