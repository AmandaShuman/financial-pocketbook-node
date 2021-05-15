const express = require('express');
const incomeRouter = express.Router();
 
incomeRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');  
    next(); 
  })
  .get((req, res) => {     
    res.end('Will send all the income entries to you');
  })
  .post((req, res) => {   
    res.end(`Will add the income entry: ${req.body.name} with addition: ${req.body.addition}`);
  })
  .put((req, res) => {
    res.statusCode = 403;   
    res.end('PUT operation not supported on /income');
  })
  .delete((req, res) => {  
    res.end('Deleting all income entries');
  });


module.exports = incomeRouter;
