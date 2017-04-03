const mongoose = require('mongoose')
const faker = require('faker')
//mongoose.Promise = global.Promise

let database = 'test'
mongoose.connect(`mongodb://localhost/${database}`)
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', () => console.log('connected to database'))

// mongoose.connection.db.dropDatabase();

const TodoSchema = new mongoose.Schema({
  title:  {
    type:     String,
    required: true
  },
  isDone: {
    type:    Boolean,
    default: false
  }
})

const Todo = mongoose.model('Todo', TodoSchema)

// Todo.remove({}, (err) => console.log('collection removed'))

for (let i = 0; i < 5; i++) {
  let text = faker.hacker.phrase()
  Todo.create({title: text}, (err) => {
    if (err) console.log(err)
  })
}

Todo.find((err, obj) => {
  if (err) return console.error(err)
  console.log(obj + `show some data`)
})
  .then(() => mongoose.disconnect(() => console.log('disconnected')))

