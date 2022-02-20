D=docker
DC=docker-compose
.PHONY: all

all: db/up

ps:
	$(DC) ps

logs:
	$(DC) logs

db/up:
	$(DC) up -d db

db/down:
	$(DC) down -v db

db/recreate:
	$(DC) down -v db
	$(DC) up -d db

db/console:
	$(DC) exec db mysql -udocker -pdocker

backend/run:
	go run ./backend/main.go

backend/run/air:
	cd backend && air
