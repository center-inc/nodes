IMAGE_NAME := base
TAG := latest

.PHONY: docker
docker:
	docker build -t $(IMAGE_NAME):$(TAG) -f base-node/geth/Dockerfile base-node

docker_run:
	docker run -e OP_NODE_NETWORK=mainnet -it $(IMAGE_NAME):$(TAG)