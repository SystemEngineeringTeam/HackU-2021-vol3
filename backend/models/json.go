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
	Name string `json:"name"`
}

type ImageGetResponse struct {
	ID  int    `json:"id"`
	URL string `json:"url"`
}

type EventPostAndDeleteRequest struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Document    string `json:"document"`
	ImageID     int    `json:"imageID"`
	DateTime    string `json:"datetime"`
	StreamURL   string `json:"streamURL"`
	Tags        []int  `json:"tags"`
}

type EventPutRequest struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	ImageID     int    `json:"imageID"`
	DateTime    string `json:"datetime"`
	StreamURL   string `json:"streamURL"`
	Tags        []int  `json:"tags"`
}

type FeedbackPostRequest struct {
	Comment string `json:"comment"`
	Stars   int    `json:"stars"`
}

type CommentGetAndPostRequest struct {
	Comment string `json:"comment"`
}
