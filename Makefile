SHELL := /bin/sh

.PHONY: help install dev build preview deploy deploy-build clean

help:
	@printf '%s\n' \
		'Common commands:' \
		'  make install       Install dependencies with npm ci' \
		'  make dev           Start the VitePress dev server' \
		'  make build         Build the static site' \
		'  make preview       Preview the production build locally' \
		'  make deploy        Build the GitHub Pages artifact locally' \
		'  make deploy-build  Build the exact GitHub Pages artifact' \
		'  make clean         Remove generated VitePress output/cache'

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

deploy-build: build
	touch src/.vitepress/dist/.nojekyll
	cp CNAME src/.vitepress/dist/CNAME

deploy: deploy-build

clean:
	rm -rf src/.vitepress/dist src/.vitepress/cache
