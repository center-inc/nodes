IMAGE_NAME := base
TAG := latest
REPO := us-docker.pkg.dev/bag-finance/nodes

.PHONY: docker
docker:
	docker build -t $(IMAGE_NAME):$(TAG) -f base-node/geth/Dockerfile base-node

.PHONY: docker_run
docker_run:
	docker run --env-file=base-node/.env.mainnet -it $(IMAGE_NAME):$(TAG)

.PHONY: release_image
release_image:
	docker tag $(IMAGE_NAME):$(TAG) $(REPO)/$(IMAGE_NAME):$(TAG)
	docker push $(REPO)/$(IMAGE_NAME):$(TAG)