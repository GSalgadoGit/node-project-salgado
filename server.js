const express = require('express');
const morgan = require('morgan');
const homeRouter = require('./routes/homeRouter');
const reservationRouter = require('./routes/reservationRouter');
const viewmenuRouter = require('./routes/viewmenuRouter');
const locationRouter = require('./routes/locationRouter');
const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/home',homeRouter);
app.use('/reservation',reservationRouter);
app.use('/viewmenu',viewmenuRouter);
app.use('/location',locationRouter);

app.use(express.static(__dirname + '/public'));

app.use((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>This is an Express Project Server</h1></body></html>');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});