/* @flow */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint import/no-dynamic-require: [0] */
/* eslint global-require: [0] */

function factory(servicesPath: string) {
  return (...args: any) => new Proxy(
    {},
    {
      get(target, name: string) {
        if (!target[name]) {
          const serviceFactory = require(`${servicesPath}/${name}`);
          target[name] = serviceFactory(...args);
        }
        return target[name];
      },
    }
  );
}

export default function laconias(servicesPath: string) {
  const serviceFactory = factory(servicesPath);
  const result = (...args: any) => ({
    S: serviceFactory(...args),
  });
  result.factory = serviceFactory;
  return result;
}
