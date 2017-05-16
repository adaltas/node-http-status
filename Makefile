REPORTER = dot

build:
	@./node_modules/.bin/coffee -b -l -o lib src/*.litcoffee
	@./node_modules/.bin/coffee src/build-typescript.coffee

test: build
	@NODE_ENV=test ./node_modules/.bin/mocha --compilers coffee:coffee-script/register \
		--reporter $(REPORTER)

.PHONY: test
