const { Router } = require('express');

const github = new Router();

github.get('/', (req, res) => res.json({ ok: true }));

module.exports = github;
