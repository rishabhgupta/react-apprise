const core = require('@actions/core');

function formatOutput(stringArr) {
  const response = {};
  stringArr.forEach((el, index) => {
    response[`_${index}`] = el;
  });
  return response;
}


try {
    const stringValue = core.getInput('string');
    const splitBy = core.getInput('split-by');
    const value = stringValue.split(splitBy);
    core.setOutput("value", formatOutput(value));
} catch (err) {
    core.setFailed(err.message);
}




