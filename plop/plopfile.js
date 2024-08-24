/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./generators/component')

module.exports = (plop) => {
  componentGenerator(plop)
}