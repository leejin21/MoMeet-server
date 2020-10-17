const Minutes = DummyData.Minutes
const Meeting = DummyData.Meeting

var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Date: ', Date.now())
    next()
})

router.post('/minutes', (req, res) => {
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

router.get('/hello', (req, res) => {
    res.send('hello there')
})

router.get('/some', (req, res) => {
    res.send('something special')
})

module.exports = router