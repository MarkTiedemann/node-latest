'use strict'

const { node, npm } = require('.')

node.fetchLatest()
    .then(latest => console.log('Node: ' + latest))
    .catch(err => console.error(err))

npm.fetchLatest()
    .then(latest => console.log('NPM: ' + latest))
    .catch(err => console.error(err))

node.isLatest()
    .then(isLatest => {
        console.log(`Is Node up to date?`)
        console.log(isLatest ? 'Yes': 'No')
    })
    .catch(err => console.error(err))

npm.isLatest()
    .then(isLatest => {
        console.log(`Is NPM up to date?`)
        console.log(isLatest ? 'Yes': 'No')
    })
    .catch(err => console.error(err))
