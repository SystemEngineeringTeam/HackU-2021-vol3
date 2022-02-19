package dboperation

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"math/rand"
	"strconv"
	"testing"
	"time"
)

func TestCreateUser(T *testing.T) {
	rand.Seed(time.Now().Unix())
	r := rand.Intn(100)
	str := "http://google.com/" + strconv.Itoa(r)
	h := sha256.Sum256([]byte(str))
	str = hex.EncodeToString(h[:])

	err := CreateUser(str, str, str)
	if err != nil {
		T.Error(err)
	}

	u, err := getUserByFirebaseUID(str)
	if err != nil {
		T.Error(err)
	}
	fmt.Println(u)
}

func TestUpdateUser(T *testing.T) {
	rand.Seed(time.Now().Unix())
	r := rand.Intn(100)
	str := "http://google.com/" + strconv.Itoa(r)
	h := sha256.Sum256([]byte(str))
	str = hex.EncodeToString(h[:])

	err := UpdateUser(str, str, "f88a8a85f5b9e1cd556b33ea0673271f3b71d28f9b44b71ee6599a56a69a1de1")
	if err != nil {
		T.Error(err)
	}
}

func TestSelectUserByID(T *testing.T) {
	u, err := SelectUserByID(4)
	if err != nil {
		T.Error(err)
	}
	fmt.Println(u)
}
