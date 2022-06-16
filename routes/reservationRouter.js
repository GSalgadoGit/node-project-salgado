// Workshop - Task 2
const express = require('express');
const reservationRouter = express.Router();

reservationRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send all the reservations to you');
})
.post((req, res) => {
  res.end(`Will add the reservation: ${req.body.name} with  ${req.body.description}`);
})
.delete((req, res) => {
  res.end('Deleting all reservations');
});

reservationRouter.route('/:reservationId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res) => {
  res.end(`Will send details of the reservation: ${req.params.reservationId} to you`);
})
.post((req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /reservations/${req.params.reservationId}`);
})
.put((req, res) => {
  res.write(`Updating the reservation: ${req.params.reservationId}\n`);
  res.end(`Will update the reservation: ${req.body.name} with: ${req.body.description}`)
})
.delete((req, res) => {
  res.end(`Deleting reservation: ${req.params.reservationId}`);
});

module.exports = reservationRouter;