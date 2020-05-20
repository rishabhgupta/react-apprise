const core = require('@actions/core');
const fetch = require('node-fetch');

const slackTemplate = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "A new version is available"
			}
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "*Package*\n@moengage/commons"
				},
				{
					"type": "mrkdwn",
					"text": "*Version:*\nv2.0.0"
				},
				{
					"type": "mrkdwn",
					"text": "*By:*\n\"Rishabh Gupta"
				}
			]
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"emoji": true,
						"text": "Documentation"
					},
					"style": "primary",
					"value": "http://moengage-triggers.s3.amazonaws.com/v0.2.1/index.html"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"emoji": true,
						"text": "Change Log"
					},
					"style": "secondary",
					"value": "https://github.com/rishabhgupta/react-apprise"
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
        
        const response = await fetch(webhook, {
            method: 'POST',
            headers,
            body: JSON.stringify({ slackTemplate }),
        });

        core.setOutput(JSON.stringify(slackTemplate));

    } catch (err) {
        core.setFailed(err.message);
    }
}

run();