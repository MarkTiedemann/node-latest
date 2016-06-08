
# node-latest

__Checks for the lastest Node or NPM version.__

# Installation

`npm i -S node-latest`

## Quickstart

```javascript
const { node, npm } = require('node-latest')

// get the latest node or npm version

node.latest().then(latest => {
    console.log('Node: ' + latest) // => 6.2.1
})

npm.latest().then(latest => {
    console.log('NPM: ' + latest) // => 3.9.5
})
```

## API

**Please note that all methods of this module return a Promise which resolves with a cleaned `semver` version number.**

### `node.latest()`

**\> gets the latest node version**

### `node.lts()`

**\> gets the latest Long Term Support node version**

### `node.current()`

**\> gets the currently installed node version**

### `npm.latest()`

**\> gets the latest npm version**

### `npm.lts()`

**\> gets the latest Long Term Support npm version**

### `npm.next()`

**\> gets the next npm version**

### `npm.current()`

**\> gets the currently installed npm version**

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
