MAKE_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := dev

.PHONY : install dev

install:
	npm install

type-check:
	npx tsc

checks: type-check

dev: install
	npx expo start

build: install
	npx expo prebuild