'use strict'

const { node, npm } = require('.')

/* NODE */

console.log('Node current: ' + node.current())

node.latest()
    .then(version => console.log('Node latest: ' + version))
    .catch(err => console.error(err))

node.lts()
    .then(version => console.log('Node lts: ' + version))
    .catch(err => console.error(err))

/* NPM */

console.log('npm current: ' + npm.current())

npm.latest()
    .then(version => console.log('npm latest: ' + version))
    .catch(err => console.error(err))

npm.lts()
    .then(version => console.log('npm lts: ' + version))
    .catch(err => console.error(err))

npm.next()
    .then(version => console.log('npm next: ' + version))
    .catch(err => console.error(err))
