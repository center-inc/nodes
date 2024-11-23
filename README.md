# `@center-inc/nodes`

https://x.com/omarish/status/1860450122624303521

## Goals for this project

* Provide simple, sensible docker images to run common blockchain nodes.
* Provide kubernetes config to deploy those images efficiently in production on GKE.

### Non-Goals

* This is focused on read-heavy workloads, so we will prefer loading from publicly-trusted snapshots instead of syncing everything from scratch.
* We're only focused on making this work on Google Kubernetes Engine, but we can add support for other providers also.

### Roadmap

- [x] `ethereum-mainnet`: Use Google Cloud's [Blockchain Node Engine](https://cloud.google.com/blockchain-node-engine?hl=en)
- [ ] `base-mainnet`
- [ ] `optimism-mainnet`
- [ ] `solana-mainnet`

## Development

### Repo Layout

* `docker`: docker base images
* `infra`: kubernetes config that may or may not use those docker images.

## Dev Setup

### Git Submodules

```sh
git submodule init
git submodule update
```

## Status

This is experimental and a proof-of-concept. Not for production use, and I may abandon this project if I find vendors who provide un-metered blockchain node access.