# Start API Locally
run:
	uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload

# Build & Run Docker
docker-build:
	docker build -t wms-backend .

docker-run:
	docker run -p 8000:8000 wms-backend

# Clean up
clean:
	rm -rf __pycache__
