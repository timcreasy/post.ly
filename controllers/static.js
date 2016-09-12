var express = require('express');
const router = require('express').Router();
const path = require('path'); // allows directory traversal

router.use(express.static(path.join(__dirname, '..', '/')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = router;
