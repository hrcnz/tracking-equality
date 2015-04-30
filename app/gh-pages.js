var ghPages = require('gh-pages')
var path = require('path')
var colors = require('colors')

ghPages.publish(path.join(__dirname, 'build'), {
  repo: "git@github.com:dumparkltd/tew-indicators.git"
},  function(err) {
  if (err) console.log('oh no! There was an error publishing to github pages: '.red, err)

})
