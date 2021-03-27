// * data acess layer
/////////////////////////////////////////////////////////////////////

// DB EXAMPLE CODE

const mysql = require("mysql");

mysql.createPool({
    connectionLimit: 10,
    password: "blahblah",
    user: "hello",
    database: "hello",
    host: "maybe dns?",
    port: "3300",
});

let DB = {};

DB.all = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM TABLE", (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

DB.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM TABLE WHERE ID = ?", [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = DB;
