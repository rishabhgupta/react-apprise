const core = require('@actions/core');
const fetch = require('node-fetch');


function getSlackMessage(package, version, documentation, changelog) {
    const slackTemplate = {
        "text": "New Package Version is available!",
        "attachments": [{
            "fields": [
                {
                    "title": "Package Name",
                    "value": `${package}`,
                    "short": true
                },
                {
                    "title": "Version",
                    "value": `v${version}`,
                    "short": true
                }
            ]
        }]
    }

    const actions = [];
    if (documentation && documentation !== "") {
        actions.push({
            "name": "documentation",
            "text": "Documentation",
            "type": "button",
            "style": "primary",
            "url": `${documentation}`
        })
    }

    if (changelog && changelog !== "") {
        actions.push({
            "name": "changelog",
            "text": "Change Log",
            "type": "button",
            "url": `${changelog}`
        })
    }

    if (actions.length > 0) {
        slackTemplate.attachments[0].actions = actions;
    }

    return slackTemplate;
}

async function run() {
    try {  
        const package = core.getInput('package');
        const version = core.getInput('version');
        const documentation = core.getInput('documentation-link');
        const changelog = core.getInput('change-log-link');
        const webhook = core.getInput('webhook');

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        const slackTemplate = getSlackMessage(package, version, documentation, changelog)
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