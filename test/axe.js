// load the axe-core script
const axeSource = require('axe-core').source;
const assert = require('assert');

describe('axe test', function () {
  it('should return results', function () {
    browser.url('./');

    // inject the script
    browser.execute(axeSource);
    // browser.debug();
    var theOptions;
    theOptions = {runOnly: {type: "rule", values: ['link-name']}};
    // run inside browser and get results
    let results = browser.executeAsync(function (options, done) {
      axe.run(options, function (err, results) {
        if (err) done(err);
        done(results);
      });
    }, theOptions);

    // assert there are no violations
    console.log(results.value, 'values')
    console.log(results.value.violations, 'vol')
    console.log(results.value.violations.length, 'len')
    assert.equal(results.value.violations.length, 0, 'Expected no a11y violations');
  })
})
