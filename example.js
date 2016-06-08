'use strict'

const { node, npm } = require('.')

node.current()
    .then(version => console.log('Node current: ' + version))
    .catch(err => console.error(err))

node.latest()
    .then(version => console.log('Node latest: ' + version))
    .catch(err => console.error(err))

node.lts()
    .then(version => console.log('Node lts: ' + version))
    .catch(err => console.error(err))

npm.current()
    .then(version => console.log('Npm current: ' + version))
    .catch(err => console.error(err))

npm.latest()
    .then(version => console.log('Npm latest: ' + version))
    .catch(err => console.error(err))

npm.lts()
    .then(version => console.log('Npm lts: ' + version))
    .catch(err => console.error(err))

npm.next()
    .then(version => console.log('Npm next: ' + version))
    .catch(err => console.error(err))
