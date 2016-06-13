
# node-latest

__Checks for the lastest Node or npm version.__

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
    console.log('npm: ' + latest) // => 3.9.5
})
```

## API

**Please note that all methods of this module return a Promise which resolves with a cleaned `semver` version number (except the `.current()` methods, which are synchronous).**

### `node.latest()`

**\> fetches the latest node version**

### `node.lts()`

**\> fetches the latest Long Term Support node version**

### `node.current()`

**\> returns the currently installed node version**

### `npm.latest()`

**\> fetches the latest npm version**

### `npm.lts()`

**\> fetches the latest Long Term Support npm version**

### `npm.next()`

**\> fetches the next npm version**

### `npm.current()`

**\> returns the currently installed npm version or `NaN` if npm is not installed**

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
