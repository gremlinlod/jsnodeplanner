const express = require('express');
const router = express.Router();



router.get('/', (req,res) =>  res.send(`list of todos`));

router.get('/:id', (req,res) =>{
  let id = req.params.id;
  res.send(`this is todo with ${id}`);
});

router.post('/', (req,res)=>{
  let somedata = {};
   res.send(`post for new id`);
});

router.post('/:id', (req,res)=>{
  let id = req.params.id;
   res.send(`update existing ${id}`);
});

module.exports = router;