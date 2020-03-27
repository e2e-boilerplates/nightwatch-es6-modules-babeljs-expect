/* eslint-disable-next-line global-require,import/no-extraneous-dependencies */
require("@babel/register");

module.exports = ((settings) => {
  // eslint-disable-next-line no-param-reassign
  settings.test_workers = false;
  return settings;
})(require("./nightwatch.js"));
