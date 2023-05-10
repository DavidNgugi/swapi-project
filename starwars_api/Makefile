PORT=4000
APPNAME=starwars_api

build:
	@echo "  >  Building docker application..."
	docker build -t ${APPNAME}:Dockerfile .
	@echo "  > Done building docker application ${APPNAME}"

run:
	@echo "  >  Building docker application..."
	docker build -t ${APPNAME}:Dockerfile .
	docker run -d -p ${PORT}:${PORT} --name ${APPNAME} --restart always ${APPNAME}:Dockerfile
	@echo "  >  Running docker application at http://localhost:${PORT}..."

stop:
	@echo "  >  Stopping docker application..."
	docker stop ${APPNAME}
	docker rm ${APPNAME}
	@echo "  >  Stopped docker application..."