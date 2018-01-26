RFWJ
---

React, flow, webpack, jest

This is a 0 config, get-started-quickly opinionated repo for spinning up a React/Flow/Jest/Webpack webapp.

## To use:

_this quick rundown assumes you have Node installed and a working knowledge of React, documentation links on the bottom if you want_

- Start all the things
  - `$ git clone https://github.com/tbremer/rfwj.git`
- Remove all the `gits`
  - `$ rm -rf .git*`
- Install all the things
  - `$ npm install`
- Start WebpackDevServer
- `$ npm start`

## To test:

`$ npm test` (optionally add `-- --watch` to autotest on file save)

## To build:

- Dev:
  - `$ npm run build:dev`
- Prod
  - `$ npm run build:prod`

## Documentation:

- [React](https://reactjs.org/)
- [Flow](https://flow.org/)
- [Webpack](https://webpack.js.org)
  - Plugins:
    - [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)
  - Loaders:
    - [`babel-loader`](https://github.com/babel/babel-loader)
- [Jest](https://facebook.github.io/jest/)

## Misc.

### Babel Plugins / Presets
- [`env`](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
- [`flow`](https://github.com/babel/babel/tree/master/packages/babel-preset-flow)
- [`react`](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
