const express = require('express')
const app = express()
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// db

let database = 'test'

// todo Move database name to config file

mongoose.connect(`mongodb://localhost/${database}`)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to database'))

// routes

const index = require('./routes/index')
const api = require('./routes/api')

// set view engine

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// requests

app.use('/', index)
app.use('/api', api)

// cath 404 error

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   console.log(err.message);
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error')
// });

app.listen(3000, function (err) {
  if (err) console.error(err)
  else console.log('Listening on port 3000')
})
