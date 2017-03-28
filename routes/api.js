const express = require('express');
const router = express.Router();



router.get('/', (req,res) =>  res.send(`list`));

router.get('/:id', (req,res) =>{
  let id = req.params.id;
  res.send(`this is ${id}`);
});

router.post('/:id', (req,res)=>{
  let id = req.params.id;
  res.send(`post to ${id}`);
});

module.exports = router;