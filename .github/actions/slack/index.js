const core = require('@actions/core');
const fetch = require('node-fetch');

const slackTemplate = {
    "text": "New Package Version is available",
    "attachments": [
        {
            "text": "@moengage/commons - v2.0.0",
            "actions": [
                {
                    "name": "Documentation",
                    "text": "Documentation",
                    "type": "button",
                    "value": "http://moengage-triggers.s3.amazonaws.com/v0.2.1/index.html",
					"style": "primary"
                },
                {
                    "name": "changelof",
                    "text": "Change Log",
                    "type": "button",
                    "value": "maze"
                }
            ]
        }
    ]
}

async function run() {
    try {  
        const text = core.getInput('text');
        const webhook = core.getInput('webhook');

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        console.log(slackTemplate);
        const response = await fetch(webhook, {
            method: 'POST',
            headers,
            body: JSON.stringify(slackTemplate),
        });

        core.setOutput(JSON.stringify(response));

    } catch (err) {
        core.setFailed(err.message);
    }
}

run();