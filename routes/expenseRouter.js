const express = require('express');
const expenseRouter = express.Router();

expenseRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the expense entries to you');
  })
  .post((req, res) => {
    res.end(`Will add the expense entry: ${req.body.name} with subtraction: ${req.body.subtraction}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /expenses');
  })
  .delete((req, res) => {
    res.end('Deleting all expense entries');
  });


module.exports = expenseRouter;
