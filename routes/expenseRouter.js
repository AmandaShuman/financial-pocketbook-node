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
    res.end(`Will add the expense entry: ${req.body.name} with amount: ${req.body.amount}`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /expenses');
  })
  .delete((req, res) => {
    res.end('Deleting all expense entries');
  });

expenseRouter.route('/:expenseId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the expense: ${req.params.expenseId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /expenses/${req.params.expenseId}`);
  })
  .put((req, res) => {
    res.write(`Updating the expense: ${req.params.expenseId}\n`);
    res.end(`Will update the expense: ${req.body.name}
        with amount: ${req.body.amount}`);
  })
  .delete((req, res) => {
    res.end(`Deleting expense: ${req.params.expenseId}`);
  });

module.exports = expenseRouter;
