// load the axe-core script
const axeSource = require('axe-core').source;
const assert = require('assert');

describe('axe test', function () {
  it('should return results', function () {
    browser.url('./');

    // inject the script
    browser.execute(axeSource);
    // browser.debug();
    var options = {runOnly: {type: "tag", values: ["wcag2a"]}};
    // run inside browser and get results
    let results = browser.executeAsync(function (options, done) {axe.run(function (err, results) { done(results);});}, {runOnly: {type: "tag", values: ["wcag2a"]}});
  
    // assert there are no violations
    console.log(results.value, 'values')
    console.log(results.value.violations, 'vol')
    console.log(results.value.violations.length, 'len')
    assert.equal(results.value.violations.length, 0, 'Expected no a11y violations');
  })
})