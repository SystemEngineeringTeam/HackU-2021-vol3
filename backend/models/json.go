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
	Title       string `json:"title"`
	Description string `json:"description"`
	Document    string `json:"document"`
	ImageID     int    `json:"imageID"`
	DateTime    string `json:"datetime"`
	Tags        []int  `json:"tags"`
	Parcitipants string `json:"parcitipants"`
	Organizer []UserIdGetResponse `json:"organizer"`
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

type EventGetResponse struct {
	ID        uint     `json:"id"`
	Title     string   `json:"title"`
	ImageURL  string   `json:"imageURL"`
	Organizer string   `json:"organizer"`
	DateTime  string   `json:"datetime"`
	Tags      []string `json:"tags"`
}
