'use strict'

const fetch = require('node-fetch')
const { exec } = require('child_process')
const trim = require('lodash.trim')

const fetchNodeLatest = () => {
    return fetch('https://nodejs.org/dist/index.json')
        .then(res => {
            if (!res.ok) throw Error(res.statusText)
            else return res.json()
        })
        .then(dists => {
            return dists[0].version
        })
}

const isNodeLatest = () => {
    return fetchNodeLatest()
        .then(version => {
            return version === process.version
        })
}

const execVersionPromise = (command) => {
    return new Promise ((resolve, reject) => {
        exec(command, (err, version) => {
            if (err) reject(err)
            else resolve(trim('v' + version))
        })
    })
}

const fetchNpmLatest = () => {
    return execVersionPromise('npm view npm version')
}

const fetchNpmCurrent = () => {
    return execVersionPromise('npm -v')
}

const isNpmLatest = () => {
    return Promise.all([
            fetchNpmLatest(),
            fetchNpmCurrent()
        ])
        .then(([latest, current]) => {
            return latest === current
        })
}

module.exports.node = {
    fetchLatest: fetchNodeLatest,
    isLatest: isNodeLatest
}

module.exports.npm = {
    fetchLatest: fetchNpmLatest,
    isLatest: isNpmLatest
}
