const core = require('@actions/core');
const github = require('@actions/github');

try {
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    console.log(JSON.stringify(githubm, null, '\t'));
} catch (err) {
    core.setFailed(err.message);
}




