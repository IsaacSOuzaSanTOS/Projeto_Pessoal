const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const routes = require('./routes/index');
app.use('/', routes);

app.listen(PORT, () => {
    console.log('O site pode ser acessado em https/localhost:3000')
});