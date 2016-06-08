'use strict'

const fetch = require('node-fetch')
const { clean } = require('semver')
const npm = require('requireg')('npm')

const nodeDist = 'https://nodejs.org/dist/index.json'
const npmRegistry = 'https://registry.npmjs.com/npm/'

const parseJson = res => res.ok ? res.json() : Promise.reject(new Error(res.statusText))
const fetchJson = url => fetch(url).then(parseJson)

/* NODE */

const nodeLatest = () =>  fetchJson(nodeDist)
    .then(dists => clean(dists[0].version))

const nodeLts = () => fetchJson(nodeDist)
    .then(dists => clean(dists.find(dist => !!dist.lts).version))

const nodeCurrent = () => Promise.resolve(clean(process.version))

/* NPM */

const npmLatest = () => fetchJson(npmRegistry + 'latest')
    .then(npm => clean(npm.version))

const npmLts = () => fetchJson(npmRegistry + 'lts')
    .then(npm => clean(npm.version))

const npmNext = () => fetchJson(npmRegistry + 'next')
    .then(npm => clean(npm.version))

const npmCurrent = () => Promise.resolve(clean(npm.version))

/* EXPORTS */

module.exports.node = {
    latest: nodeLatest,
    lts: nodeLts,
    current: nodeCurrent
}

module.exports.npm = {
    latest: npmLatest,
    lts: npmLts,
    next: npmNext,
    current: npmCurrent
}
