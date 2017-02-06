PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

js_files = $(shell find ./lib -name '*.js')

lint: $(js_files)
	jshint $?

build/templates.js: templates/*.handlebars
	mkdir -p $(dir $@)
	handlebars $^ > $@

template: build/templates.js