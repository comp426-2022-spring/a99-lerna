var express = require("express")
var app = express()

const fs = require('fs')
const cors = require('cors')
const morgan = require('morgan')
const db = require("./database.js")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Server port
var port = process.env.PORT || 5555 
// Start server
const server = app.listen(port, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", port))
});
// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"App Online"});
	res.status(200);
});

// Define other CRUD API endpoints using express.js and better-sqlite3
// CREATE a new user (HTTP method POST) at endpoint /app/new/
app.post("/app/new/user", (req, res, next) => {
    let data = {
        user: req.body.username,
        pass: req.body.password,
        height: req.body.height,
        weight: req.body.weight,
        weeks: req.body.weeks,
        goal: req.body.goal
    }
    const stmt = db.prepare('INSERT INTO userinfo (username, password, height, weight, weeks, goal) VALUES (?, ?, ?, ?, ?, ?)')
    const info = stmt.run(data.user, data.pass, data.height, data.weight, data.weeks, data.goal)
    res.status(200).json(info)
});
// READ a list of users (HTTP method GET) at endpoint /app/users/
app.get("/app/users", (req, res) => {	
    try {
        const stmt = db.prepare('SELECT * FROM userinfo').all()
        res.status(200).json(stmt)
    } catch {
        console.error(e)
    }
});

// READ a single user (HTTP method GET) at endpoint /app/user/:id
app.get("/app/user/:username", (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM userinfo WHERE username = ?').get(req.params.username);
        res.status(200).json(stmt)
    } catch (e) {
        console.error(e)
    }

});

// UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
app.patch("/app/update/user/:username", (req, res) => {
    let data = {
        user: req.body.username,
        pass: req.body.password,
        height: req.body.height,
        weight: req.body.weight,
        weeks: req.body.weeks,
        goal: req.body.goal
    }
    const stmt = db.prepare('UPDATE userinfo SET username = COALESCE(?,username), password = COALESCE(?,password), height = COALESCE(?,height), weight = COALESCE(?,weight), weeks = COALESCE(?,weeks), goal = COALESCE(?,goal) WHERE username = ?')
    const info = stmt.run(data.user, data.pass, data.height, data.weight, data.weeks, data.goal, req.params.id)
    res.status(200).json(info)
});

// DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
app.post("/app/delete/user", (req, res) => {
    let data = {
        user: req.body.username,
    }
    try {
    const stmt = db.prepare('DELETE FROM userinfo WHERE username = ?')
    const info = stmt.run(data.user)
    res.status(200).json(stmt)
    } catch (e) {
        console.error(e)
    }
});

app.post("/app/login", (req, res, next) => {
    let data = {
        user: req.body.username,
        pass: req.body.password,
    }
    try {
        const stmt = db.prepare('SELECT * FROM userinfo WHERE username = ? AND password = ?');
        const info = stmt.get(data.user, data.pass);
        console.log(info)
        if (info) {
            res.status(200).json(info)
        } else {
            res.send({message: "Incorrect Username and/or Password"})
        }
    } catch (e) {
        console.error(e)
    }
});



// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found."});
    res.status(404);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server stopped')
    })
})