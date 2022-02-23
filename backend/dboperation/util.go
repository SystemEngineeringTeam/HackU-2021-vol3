package dboperation

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func connect() *gorm.DB {
	// connect to the database
	gormDB, err := gorm.Open("mysql", "docker:docker@tcp(localhost:33063)/app-db?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}
	return gormDB
}
