const express = require('express')
const bodyParser = require('body-parser')
const mc = require('./controllers/messages_conroller.js')

let app = express();

app.use(bodyParser.json())
app.use(express.static( __dirname + '/../public/build'))

let messageBaseURL = '/api/messages'
app.post(messageBaseURL,mc.create)
app.get(messageBaseURL,mc.read)
app.put(`${messageBaseURL}/:id`,mc.update)
app.delete(`${messageBaseURL}/:id`,mc.delete)

let port = 3000
app.listen(port, () => { console.log('I am listening on port ' + port); })
