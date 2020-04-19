const express = require('express')
const http = require('http')

const bodyParer = require('body-parser');
const app = express();

const routesUser = require('./js/routes/user')
const routesHome = require('./js/routes/home')

app.use(express.static('public'))

app.use(bodyParer.urlencoded({ extended: false }))

app.use(routesUser);
app.use(routesHome);

const PORT = 4000;
const server = http.createServer(app);


server.listen(4000, () => { console.log(`server is up and running on ${PORT}`) })