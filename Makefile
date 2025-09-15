-include .env.local
DOCKER_REGISTRY=smole.cr.cloud.ru

npm-build:
		rm -rf ./dist
		npm run build:prod

docker-build:
		docker login $(DOCKER_REGISTRY)
		docker rmi -f smole.cr.cloud.ru/ping-app
		docker build --tag smole.cr.cloud.ru/ping-app --platform linux/amd64 .
		#docker build -t  ping-app.cr.cloud.ru/ping-app .

docker-push:
		docker push smole.cr.cloud.ru/ping-app

docker-run:
	docker run -d --name smole.cr.cloud.ru/ping-app --restart unless-stopped -p 8080:80 smole.cr.cloud.ru/ping-app # запуск в фоне

docker-compose-up:
		docker compose up -d  # запуск в фоне
