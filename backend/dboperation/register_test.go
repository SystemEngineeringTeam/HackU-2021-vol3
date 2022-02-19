package dboperation

import "testing"

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
