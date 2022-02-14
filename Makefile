D=docker
DC=docker-compose
.PHONY: all

all: db/up

ps:
	$(DC) ps

db/up:
	$(DC) up -d db

db/down:
	$(DC) down -v db

db/console:
	$(DC) exec db mysql -udocker -pdocker

backend/run:
	go run ./backend/main.go

backend/run/air:
	cd backend && air
