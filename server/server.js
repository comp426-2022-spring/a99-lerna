var express = require("express")
var app = express()

const fs = require('fs')
const morgan = require('morgan')

const db = require("./database.js")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
        pass: req.body.password
    }
    const stmt = db.prepare('INSERT INTO userinfo (username, password) VALUES (?, ?)')
    const info = stmt.run(data.user, data.pass)
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
app.get("/app/user/:id", (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM userinfo WHERE id = ?').get(req.params.id);
        res.status(200).json(stmt)
    } catch (e) {
        console.error(e)
    }

});

// UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
app.patch("/app/update/user/:id", (req, res) => {
    let data = {
        user: req.body.username,
        pass: req.body.password
    }
    const stmt = db.prepare('UPDATE userinfo SET username = COALESCE(?,username), password = COALESCE(?,password) WHERE id = ?')
    const info = stmt.run(data.user, data.pass, req.params.id)
    res.status(200).json(info)
});

// DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
app.delete("/app/delete/user/:id", (req, res) => {
    const stmt = db.prepare('DELETE FROM userinfo WHERE id = ?')
    const info = stmt.run(req.params.id)
    res.status(200).json(info)
});
// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server stopped')
    })
})