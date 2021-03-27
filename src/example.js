var express = require("express");
var app = express();
// var bodyParser = require("body-parser");
var Joi = require("joi");

// Always add your routes after the middleware functions, like in the above code.
// FIXED: express에서 express.json()의 순서가 중요한 듯?
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/bye", (req, res) => {
    res.send("BYE");
});

// param의 경우
app.get("/need/:year/:month", (req, res) => {
    // res.send(req.params.id)
    // res.send(req.params)
    // query params:
    // http://[ec2-public-dns]/need/12/8?hello=bye
    res.send(req.query);
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.post("/api/courses", (req, res) => {
    console.log(req.body.name);
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

// PUT의 정석
app.put("/api/courses/:id", (req, res) => {
    // look up the course
    // console.log("hello")
    const course = courses.find((c) => c.id == parseInt(req.params.id));
    // if not exist, retun 404
    if (!course)
        res.status(404).send({
            error: "The course with the given id was not found",
        });

    // validate
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    const { error, value } = schema.validate({ name: req.body.name });
    // if !validate, return 400
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        // update course
        course.name = value.name;
        // return the updated course
        res.send(course);
    }
});

app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given id was not found");
        return;
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

// cmd >> export PORT=8000
// 을 하면 process.env.PORT = 8000 이 됨.
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Listening on port 8000..."));
