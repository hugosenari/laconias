import laconiar from './index';
/* eslint global-require: [0] */

describe('index.js', () => {
  it('should require something', () => {
    const target = laconiar()();
    const expected = require('fs');
    expect(target.fs).toEqual(expected);
    expect(target.fs).toEqual(expected);
  });
  it('should use defaults', () => {
    const expected = 'spam';
    const target = laconiar({ fs: expected })();
    expect(target.fs).toEqual(expected);
    expect(target.fs).toEqual(expected);
  });

  it('shoudl return lacoinar factory', () => {
    const { R: target } = laconiar.factory();
    const expected = require('fs');
    expect(target.fs).toEqual(expected);
  });
});
