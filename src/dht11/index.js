const formatMessage = require('format-message');
const path = require('path');

const staticPath = path.relative(`${__dirname}/../../src`, __dirname);

const dht11 = {
    name: 'DHT11',
    extensionId: 'dht11',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'ArthurZheng',
    iconURL: `${staticPath}/asset/DTH11.png`,
    description: formatMessage({
        id: 'dht11.description',
        default: 'DHT11 Temperature and humidity sensor module.',
        description: 'Description of dht11'
    }),
    featured: true,
    blocks: `${staticPath}/blocks.js`,
    generator: `${staticPath}/generator.js`,
    toolbox: `${staticPath}/toolbox.js`,
    msg: `${staticPath}/msg.js`,
    location: 'local', // or 'remote'
    tags: ['sensor'],
    link: 'https://www.baidu.com'
};

module.exports = dht11;
