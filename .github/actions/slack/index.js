const core = require('@actions/core');
const fetch = require('node-fetch');

async function run() {
    try {  
        const text = core.getInput('text');
        const webhook = core.getInput('webhook');

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        
        const response = await fetch(webhook, {
            method: 'POST',
            headers,
            body: JSON.stringify({ text }),
        });

        core.setOutput(JSON.stringify(response));

    } catch (err) {
        core.setFailed(err.message);
    }
}

run();