const app = require('../app'); // Adjust the path if necessary
const { createServer } = require('@vercel/node');

module.exports = createServer(app);
