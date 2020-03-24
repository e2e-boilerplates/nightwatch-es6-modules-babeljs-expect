module.exports = {
  before: browser => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  },

  after: browser => {
    browser.end();
  },

  "should be on Sandbox": browser => {
    browser.expect.title().to.contain("Sandbox");
    browser.expect.element("h1").text.to.equal("Sandbox");
  }
};
