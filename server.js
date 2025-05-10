const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'))


const routes = require('./routes/index');
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`O site pode ser acessado em https://localhost:${PORT}`)
});