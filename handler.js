const serverless = require('serverless-http');
const express = require('express');
const github = require('./src/api/github');

const app = express();

app.use('/github', github);

module.exports.rest = serverless(app);
