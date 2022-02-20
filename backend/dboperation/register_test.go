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

func TestSelectRegisteredEvents(t *testing.T) {
	e, err := SelectRegisteredEvents(4)
	if err != nil {
		t.Error(err)
	}

	for _, v := range e {
		fmt.Println(v.Title)
	}
}
