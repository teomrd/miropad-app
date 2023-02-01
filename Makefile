MAKE_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := dev

NODE_OPTIONS=--openssl-legacy-provider
export

.PHONY : install dev

install:
	yarn install

type-check:
	npx tsc

lint:
	yarn run lint

checks: type-check lint

dev: install
	npx expo start

build: install
	npx expo prebuild