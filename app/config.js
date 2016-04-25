/* @flow */

const devConfig = {
  protocol: 'http',
  host: 'localhost',
  port: 3000,
}

const config = {
  protocol: 'http',
  host: 'localhost',
  port: 3000,
}

export default __DEV__ ? devConfig : config;
