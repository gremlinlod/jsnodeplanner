const mongoose = require('mongoose')
const faker = require('faker')
// mongoose.Promise = global.Promise
// assert.equal(query.exec().constructor, global.Promise);

mongoose.connect(`mongodb://localhost/test`)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to database'))

// Определяем схему

console.log('marker1')
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
})

// Создаем модель

const Todo = mongoose.model('Todo', TodoSchema)

// Удаляем данные из базы

Todo.remove(() => console.log('collection removed'))

// Заполняем базу

  .then(() => {
    for (let i = 0; i < 5; i++) {
      let text = faker.hacker.phrase()
      Todo.create({title: text}, (err) => {
        if (err) console.error(err)
      })
    }
  })

  // Выводим результат

  .then(() => {
    console.log('getting collection')
    Todo.find((err, obj) => {
      if (err) return console.error(err)
      console.log(obj + `show some data`)
    })
  }
  )

// Закрываем коннект
// db.close(() => console.log('base is closed'))
// добавить асинхронное закрытие базы
