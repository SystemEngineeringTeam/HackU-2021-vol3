package models

type UserIdGetResponse struct {
	Id              int    `json:"id"`
	Name            string `json:"name"`
	ProfileImageURL string `json:"profileImageURL"`
	Badge           string `json:"badge"`
}

type UserPostRequest struct {
	Name            string `json:"name"`
	ProfileImageURL string `json:"profileImageURL"`
}

type UserPutRequest struct {
	Name            string `json:"name"`
	ProfileImageURL string `json:"profileImageURL"`
}

type ImageGetResponse struct {
	ID  int    `json:"id"`
	URL string `json:"url"`
}
