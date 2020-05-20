const core = require('@actions/core');
const fetch = require('node-fetch');

const slackTemplate = {
    "text": "New Package Version is available!",
    "attachments": [
        {
            "fields": [
                {
                    "title": "Package Name",
                    "value": "@moengage/commons",
                    "short": true
                },
                {
                    "title": "Version",
                    "value": "v2.0.0",
            "short": true
                }
            ],
			 "actions": [
                {
                    "name": "documentation",
                    "text": "Documentation",
                    "type": "button",
					"style": "primary",
                    "url": "http://moengage-triggers.s3.amazonaws.com/v0.2.1/index.html"
                },
                {
                    "name": "changelog",
                    "text": "Change Log",
                    "type": "button",
                    "url": "http://moengage-triggers.s3.amazonaws.com/v0.2.1/index.html"
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