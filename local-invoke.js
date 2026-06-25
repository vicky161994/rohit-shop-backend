const {handler} = require('./index.js');
const fs = require('fs');
const eventMethod = process.argv[2];
const eventPath = `${__dirname}/events/${eventMethod}-event.json`;
const eventJsonPath = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
handler(eventJsonPath)
