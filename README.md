
# node-latest

__Checks for the lastest Node or NPM version.__

# Installation

`npm i -S node-latest`

## Quickstart

**fetch the lastest node or npm version:**

```javascript
const { node, npm } = require('node-latest')

node.fetchLatest().then(latest => {
    console.log('Node: ' + latest) // => v6.1.0
})

npm.fetchLatest().then(latest => {
    console.log('NPM: ' + latest) // => v3.8.9
})
```

**compare the lastest node or npm version to the currently installed version:**

```javascript
const { node, npm } = require('node-latest')

node.isLatest().then(isLatest => {
    console.log(`Is Node up to date?`)
    console.log(isLatest ? 'Yes': 'No')
})

npm.isLatest().then(isLatest => {
    console.log(`Is NPM up to date?`)
    console.log(isLatest ? 'Yes': 'No')
})
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
