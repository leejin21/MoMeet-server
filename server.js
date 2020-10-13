const DummyData = require("./DummyData");
const Validation = require("./validation")

const validateMinutes = Validation.validateMinutes
const Minutes = DummyData.Minutes
const Meeting = DummyData.Meeting

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// Always add your routes after the middleware functions, like in the above code.
// FIXED: express에서 express.json()의 순서가 중요한 듯?
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// GET
app.get('/minutes/:company', (req, res) => {
    // look up the minutes
    const message = Minutes.map(m => ({
        when: m.when,
        where: m.where,
        who: m.who,
        issues: m.issues
    }))
    res.send(message)
})

// POST
app.post('/minutes', (req, res) => {
    const { error, value } = validateMinutes(req.body.when)

    if (error) {
        res.status(400).send({ error: error.details[0].message })
    } else {
        when = new Date(parseInt(value.year), parseInt(value.month) - 1, parseInt(value.day))
        const reserve = new Meeting(when, req.body.where, req.body.who, req.body.issues)
        Minutes.push(reserve)
        res.send(reserve)
    }
})


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