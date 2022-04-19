import express from 'express';
const app = express()
import minimist from 'minimist';

// CL argument
const args = minimist(process.argv.slice(2));
args['port'];
var port = args.port || 5000 // (default 5000)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const logging = (req, res, next) => {
    console.log(req.body.number)
    next()
}

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%', port))
})


// endpoints 
app.get('/app/', (req, res) => {
    res.status(200).end('Health Tracking App Online')
    res.type("text/plain")
})

app.get('/app/login/', (req, res) => {
    res.status(200).send('Login Page')
    res.type("text/plain")
})

// defaults
app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
    res.type("text/plain")
})

app.use(function(req,res) {
    res.status(404).send("404 Not found")
    res.type("text/plain")
})