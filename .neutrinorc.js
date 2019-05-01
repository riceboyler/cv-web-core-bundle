const typescript = require('neutrino-middleware-ts-loader')

module.exports = neutrino => {
  neutrino.use('@neutrinojs/react-components');
  neutrino.use('@neutrinojs/jest');
  neutrino.use(typescript, {});
}
