const DummyData = require("./DummyData")
const Validation = require("./validation")
// const DB = require('./db/index')
const minutes = require('./router/minutes')

const validateMinutes = Validation.validateMinutes

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// Always add your routes after the middleware functions, like in the above code.
// FIXED: express에서 express.json()의 순서가 중요한 듯?
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// GET
// app.get('/minutes/:company', (req, res) => {
// look up the minutes
// const message = Minutes.map(m => ({
//     when: m.when,
//     where: m.where,
//     who: m.who,
//     issues: m.issues
// }))
// res.send(message)

// try {
// let results = await DB.one(req.params.company);
// res.json(results)
// } catch (e) {
// console.log(e)
// res.sendStatus(500);
// }

// })

app.use('/minutes', minutes)

// POST



// app.delete('/minutes/:company', (req, res) => {
// Look up the minutes
// Not existing, return 404

// Delete

// Return the same minutes
// })


// cmd >> export PORT=8000
// 을 하면 process.env.PORT = 8000 이 됨.
const port = process.env.PORT || 8000
app.listen(port, () => console.log('Listening on port 8000...'))