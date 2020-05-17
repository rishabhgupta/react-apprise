const core = require('@actions/core');
const github = require('@actions/github');

try {
    const stringValue = core.getInput('string');
    const splitBy = core.getInput('split-by');
    const value = stringValue.split(splitBy);
    console.log(value);
    core.setOutput("value", value);
} catch (err) {
    core.setFailed(err.message);
}




