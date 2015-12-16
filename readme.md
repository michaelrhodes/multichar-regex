# multichar-regex
This is a regular expression that matches all the surrogate pairs and combining-marked characters in a string.

[![Build status](https://travis-ci.org/michaelrhodes/multichar-regex.svg?branch=master)](https://travis-ci.org/michaelrhodes/multichar-regex)

## Install

```sh
$ npm install multichar-regex
```

## Usage

```js
// If you want to use the raw regular expression, you can…
var regex = require('multichar-regex')

// …but this helper function might be nicer to use.
var matches = require('multichar-regex/matches')

matches('oh hi, doggy 🐶 meet the sun: ☀️')
=> [ { value: '🐶', index: 13, length: 2 },
     { value: '☀️', index: 30, length: 2 } ]
```

## License

[MIT](http://opensource.org/licenses/MIT)
