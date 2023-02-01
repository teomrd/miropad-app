MAKE_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := dev

.PHONY : install dev

install:
	pnpm install

type-check:
	npx tsc

lint:
	pnpm run lint

checks: type-check lint

dev: install
	npx expo start

build: install
	npx expo prebuild