const express = require('express');
const locationRouter = express.Router();

locationRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send all locations to you');
});

module.exports = locationRouter;