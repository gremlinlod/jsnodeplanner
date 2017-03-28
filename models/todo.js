const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true},
  isDone: {
    type: Boolean,
    default: false}
});

TodoSchema.methods.getAll = () =>{
  "use strict";
  let all = [];
  return all;
};

TodoSchema.methods.getOne = (id) =>{
  let one = {};
  return one;
};

TodoSchema.methods.addOne = (newObject) => {

  return True;
};


module.exports = mongoose.model('Todo', TodoSchema);

