const fetch = require("node-fetch");

const wakeUpDyno = (url, interval) => {
    const milliseconds = interval * 60000;
    setTimeout(() => {
        fetch(url);
    }, milliseconds);
};

module.exports = wakeUpDyno;