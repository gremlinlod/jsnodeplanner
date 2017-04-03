const express = require('express');
const router = express.Router();
//dev
const faker = require('faker');
// temporary data
let data = [];

for (let i = 0; i < 20; i++) {
  let text = faker.hacker.noun();
  data.push(text);
}

router.get('/', (req, res) => {
  res.render(`index`, {data: data});
});

module.exports = router;