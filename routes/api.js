const express = require('express');
const router = express.Router();

const Todo = require('../models/todo.js');

// Получаем список всех задач

router.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) return console.error(err);
    res.send(todos);
  });

});

// Получаем одно задачу по ID

router.get('/:id', (req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (err) return console.error(err);
    res.send(todo);
  });
});

// Добавляем задачу

router.post('/', (req, res) => {
  let title = req.body.title;
  // console.log(text);
  Todo.create({title: title}, (err) => {
    if (err) console.error(err);
  });
  res.redirect('/api');
});

// Изменяем задачу

router.post('/:id', (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  Todo.findByIdAndUpdate(id, {title: title}, (err) => {
    if (err) console.error(err);
  });
  Todo.findById(id, (err, todo) => {
    if (err) console.error(err);
    res.send(todo);
  });
});

// Помечаем задачу выполненной

router.get('/:id/done', (req, res) => {
  let id = req.params.id;
  Todo.findByIdAndUpdate(id, {isDone: true}, (err) => {
    if (err) console.error(err);
  });
  Todo.findById(id, (err, todo) => {
    if (err) console.error(err);
    res.send(todo);
  });
});

// Поменять модуль на переключение выполнения
// isDone = !isDone

// Удаление задачи

router.get('/:id/remove', (req, res) => {
  let id = req.params.id;
  Todo.findByIdAndRemove(id, (err) => {
    if (err) console.error(err);
  });
  res.redirect('/api');
});

// Добавить удаление выполненных задач

// deleteMany()


module.exports = router;