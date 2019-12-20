# laconiar

> requirejs like service for laconia

[![npm](https://img.shields.io/npm/v/laconiar.svg?style=flat-square)](https://www.npmjs.com/package/laconiar)
[![npm](https://img.shields.io/npm/dt/laconiar.svg?style=flat-square)](https://npm-stat.com/charts.html?package=laconiar&from=2016-04-01)
[![Codecov branch](https://img.shields.io/codecov/c/github/hugosenari/laconiar/master.svg?style=flat-square)](https://codecov.io/github/hugosenari/laconiar)
<br />
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./other/code_of_conduct.md)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](./other/roadmap.md)

## Why?

Every time you use `require` you make it tightly coupled with required library. This isn't good for tests and SOLID principles.

With this you can `require' things and inject/mock them when testing

## Installation

```sh
npm install --save laconiar
```

## Usage

```js
const laconia require('@laconia/core');
const R = require('laconiar');

const app = (event, {
  R: {
    fs, // this same as const fs = require('fs');
    fs: { createReadStream }, // this same as const { createReadStream } = require('fs');
    'aws-sdk': awsSDK, // this is same as const awsSDK = require('aws-sdk');
    './spam': err, // this will not work;
    `${__dirname}/spam`: spam // this will work
  }
}) => {
  // do something with required modules;
  return createReadStream();
};

exports.handler = laconia(app).register(R.factory());

// test app

describe('testing app', () => {
  it('mocking requirements', () => {
    const createReadStream = jest.fn();
    app(
      R: {
        fs: { createReadStream }
      }
    );
    expect(createReadStream).toHaveBeenCalled();
  });
});

```

## FAQ

### Should you use it?

Good question, the main feature of [Laconia](https://laconiajs.io/) is to be a Micro [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection) framework, some DI frameworks recommends to do not use it for things like require external library.

My point is that you may use it for service creation.

### How use it with [Tree shaking](https://en.wikipedia.org/wiki/Tree_shaking)?

You couldn't, since your dependency are loaded dynamically. Isn't not impossible but not implemented yet.

## Related

// TODO

## Contributors

Thanks goes to these people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub>hugosenari</sub>](https://github.com/hugosenari)<br />[💻](https://github.com/hugosenari/laconiar/commits?author=hugosenari "Code") [📖](https://github.com/hugosenari/laconiar/commits?author=hugosenari "Documentation") [🚇](#infra-luftywiranda13 "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT &copy; [hugosenari]()
