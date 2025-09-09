-include .env.local

npm-build:
		rm -rf ./dist
		npm run build:prod

docker-build: ping-ui-build
		docker build -t ping-ui .

docker-run: ping-ui-run
	docker run -d --name ping-ui --restart unless-stopped -p 8080:80 ping-ui # запуск в фоне


docker-compose-up: docker-compose-up
		docker compose up -d  # запуск в фоне
