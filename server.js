const express = require('express');
const morgan = require('morgan');
const incomeRouter = require('./routes/incomeRouter');
const expenseRouter = require('./routes/expenseRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/income', incomeRouter);
app.use('/expenses', expenseRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is for my portfolio project</h1></body></html>');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});