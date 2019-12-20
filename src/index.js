/* @flow */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint import/no-dynamic-require: [0] */
/* eslint global-require: [0] */

export default function laconiar(servicesPath: string) {
  return (...args: any) => new Proxy(
    {},
    {
      get(target, name: string) {
        if (!target[name]) {
          const factory = require(`${servicesPath}/${name}`);
          target[name] = factory(...args);
        }
        return target[name];
      },
    }
  );
}

laconiar.factory = (servicesPath: string) => (...args) => ({
  S: laconiar(servicesPath)(...args),
});
