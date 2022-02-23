package models

type UserIdGetResponse struct {
	ID              uint   `json:"id"`
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
	ID  uint   `json:"id"`
	URL string `json:"url"`
}

type EventPostRequest struct {
	Title       string              `json:"title"`
	Description string              `json:"description"`
	Document    string              `json:"document"`
	ImageID     int                 `json:"imageID"`
	DateTime    string              `json:"datetime"`
	Tags        []int               `json:"tags"`
	Organizer   []UserIdGetResponse `json:"organizer"`
}

type EventPutRequest struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	ImageID     int    `json:"imageID"`
	DateTime    string `json:"datetime"`
	StreamURL   string `json:"streamURL"`
	Tags        []int  `json:"tags"`
}

type FeedbackGetResponse struct {
	ID              int    `json:"id"`
	Comment         string `json:"comment"`
	Stars           int    `json:"stars"`
	CommentedBy     string `json:"commentedBy"`
	ProfileImageURL string `json:"profileImageURL"`
}

type FeedbackPostRequest struct {
	Comment string `json:"comment"`
	Stars   int    `json:"stars"`
}

type CommentGetAndPostRequest struct {
	Comment string `json:"comment"`
}

type EventGetResponse struct {
	ID           uint     `json:"id"`
	Title        string   `json:"title"`
	ImageURL     string   `json:"imageURL"`
	Organizer    string   `json:"organizer"`
	DateTime     string   `json:"datetime"`
	Tags         []string `json:"tags"`
	Participants int      `json:"participants"`
	Status       string   `json:"status"`
}

type EventWithIDGetResponse struct {
	ID          uint   `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Document    string `json:"document"`
	ImageURL    string `json:"imageURL"`
	Organizer   struct {
		ID              uint   `json:"id"`
		Name            string `json:"name"`
		ProfileImageURL string `json:"profileImageURL"`
	} `json:"organizer"`
	DateTime     string   `json:"datetime"`
	Participants uint     `json:"participants"`
	StreamURL    string   `json:"streamURL"`
	Tags         []string `json:"tags"`
}

type StreamURLPostRequest struct {
	StreamURL string `json:"streamURL"`
}
