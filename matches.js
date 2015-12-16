var multichar = require('./index')

module.exports = function (string) {
  var matches = []
  var match 
  while (match = multichar.exec(string)) {
    matches.push({
      value: match[0],
      index: match.index,
      length: match[0].length
    })
  }
  return matches
}
