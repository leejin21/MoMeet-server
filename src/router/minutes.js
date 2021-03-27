// * controller layer
//////////////////////////////////////////////////////////////////////////////////////
DummyData = require("../models/DummyData");

const Minutes = DummyData.Minutes;
const Meeting = DummyData.Meeting;

var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
    // 이거 대신 mocha랑 chai 쓰기
    // 모든 유형의 HTTP 요청에 대해 실행
    console.log("Date: ", Date.now());
    next();
});

router.post("/mins", (req, res) => {
    const { body } = req;

    const reserve = new Meeting(
        Minutes.length + 1,
        body.company,
        body.date,
        body.title,
        body.content
    );

    Minutes.push(reserve);
    console.log(Minutes);

    res.send(reserve);

    // const { error, value } = validateMinutes(req.body.when);
    // if (error) {
    //     res.status(400).send({ error: error.details[0].message });
    // } else {
    //     when = new Date(
    //         parseInt(value.year),
    //         parseInt(value.month) - 1,
    //         parseInt(value.day)
    //     );
    //     const reserve = new Meeting(
    //         when,
    //         req.body.where,
    //         req.body.who,
    //         req.body.issues
    //     );
    //     Minutes.push(reserve);
    //     res.send(reserve);
    // }
});

router.get("/getAll", (req, res) => {
    console.log("hello");
    res.send("hello there");
});

router.get("/some", (req, res) => {
    console.log("some");
    res.send("something special");
});

module.exports = router;
