// Vercel Serverless Function entry that reuses the existing requestHandler
const handler = require('..\\server.js');

module.exports = (req, res) => {
  return handler(req, res);
};


