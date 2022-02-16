package models

type UserPostRequest struct {
	Id              int    `json:"id"`
	Name            string `json:"name"`
	Budge           string `json:"badge"`
	ProfileImageURL string `json:"profileImageURL"`
}
