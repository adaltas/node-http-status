# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.8.1](https://github.com/adaltas/node-http-status/compare/v1.7.4...v1.8.0) (2024-10-21)

* Revert changes introduced by 1.8.0

### [1.7.4](https://github.com/adaltas/node-http-status/compare/v1.7.3...v1.7.4) (2024-02-23)


### Bug Fixes

* **types:** improve TypeScript strict typing for numeric keys in HttpStatus ([#49](https://github.com/adaltas/node-http-status/issues/49)) ([4945afd](https://github.com/adaltas/node-http-status/commit/4945afdc1f8aaba59fbc95983e7a2934238dab24)), closes [#48](https://github.com/adaltas/node-http-status/issues/48)

### [1.7.3](https://github.com/adaltas/node-http-status/compare/v1.7.2...v1.7.3) (2023-10-17)

### [1.7.2](https://github.com/adaltas/node-http-status/compare/v1.7.1...v1.7.2) (2023-10-17)

### [1.7.1](https://github.com/adaltas/node-http-status/compare/v1.7.0...v1.7.1) (2023-10-17)

## [1.7.0](https://github.com/adaltas/node-http-status/compare/v1.6.2...v1.7.0) (2023-09-04)


### Features

* 425 Too Early ([#46](https://github.com/adaltas/node-http-status/issues/46)) ([3247afe](https://github.com/adaltas/node-http-status/commit/3247afe9c5497d2b983e407b5051ae25a3f53387))

### [1.6.2](https://github.com/adaltas/node-http-status/compare/v1.6.1...v1.6.2) (2023-01-10)


### Bug Fixes

* **types:** add undefined to types ([8efa2e1](https://github.com/adaltas/node-http-status/commit/8efa2e1e977cc75a64d71217ef454312db206edb)), closes [#43](https://github.com/adaltas/node-http-status/issues/43)

### [1.6.1](https://github.com/adaltas/node-http-status/compare/v1.6.0...v1.6.1) (2023-01-01)

## [1.6.0](https://github.com/adaltas/node-http-status/compare/v1.5.3...v1.6.0) (2023-01-01)


### Features

* more precise types ([#42](https://github.com/adaltas/node-http-status/issues/42)) ([f2a3653](https://github.com/adaltas/node-http-status/commit/f2a3653aa6aee1340280a96ff5b08bef99548248))

### [1.5.3](https://github.com/adaltas/node-http-status/compare/v1.5.2...v1.5.3) (2022-09-07)

### [1.5.2](https://github.com/adaltas/node-http-status/compare/v1.5.1...v1.5.2) (2022-05-06)


### Bug Fixes

* types on 502 status ([1f0b681](https://github.com/adaltas/node-http-status/commit/1f0b681e021d3f77e1594dd1329a178f6905ebe7))

### [1.5.1](https://github.com/adaltas/node-http-status/compare/v1.5.0...v1.5.1) (2022-04-14)


### Bug Fixes

* **types:** 502 is missing _NAME, _MESSAGE, _CLASS ([b86e714](https://github.com/adaltas/node-http-status/commit/b86e714db1ef41c0e841c9c96096d0288378d048))


## Version 1.5.0

* ts: support strict mode
* mocha: move config into package
* package: latest dependencies

## Version 1.4.2

* package: update adaltas url

## Version 1.4.1

* readme: fix api example

## Version 1.4.0

* codes: add status code classes

## Version 1.3.2

* 502: wrong key for name and message

## Version 1.3.1

* ts: define properties as readonly

## Version 1.3.0

* codes: new codes 102 and 103
* ts: rewrite declaration type file
* ts: mocha integration

## Version 1.2.0

* typescript: use primitives

## Version 1.1.2

* typescript: generate correct typescript definitions file #28

## Version 1.1.1

* codes: double 420 #26
* codes: wrong keys for 305_MESSAGE and 305_NAME #25
* typescript: types files
* package: remove Makefile
* travis: test against Node.js 6,7,8

## Version 1.1.0

* extra: add unofficial, iis, nginx and cloudflare codes
* package: publishing process
* package: ignore lock files
* src: new code and message properties
* package: latest dependencies
* readme: add author company

## Version 0.1.1 – Nov 13, 2012

-   Module as a better citizen
-   Makefile to compile and run tests

## Version 0.1.1 – Dec 13, 2011

-   Code officially under the BSD License

## Version 0.1.0 – April 17, 2011

-   Added reference links to HTTP specification
-   Fixed naming convention for constants from `PascalCase` to `ALL_CAPS`
-   Converted status codes from string to number
-   Updated samples
-   Updated tests
-   Added this `CHANGELOG`

## Version 0.0.1 – March 25, 2011

-   Initial release.
