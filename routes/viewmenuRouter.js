const express = require('express');
const viewmenuRouter = express.Router();

viewmenuRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send all the Menu Items to you');
});

module.exports = viewmenuRouter;