import laconias from './index';
/* eslint global-require: [0] */

describe('index.js', () => {
  it('should require something', () => {
    const args = [0, 1, 2];
    const target = laconias('./services')(...args);
    expect(target.echo).toEqual(args);
  });

  it('should return laconias factory', () => {
    const args = [0, 1, 2];
    const { S: target } = laconias.factory('./services')(...args);
    expect(target.echo).toEqual(args);
    expect(target.echo).toEqual(args);
  });
});
