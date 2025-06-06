// server.js
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const routes = require('./src/routes/index');
const methodOverride = require('method-override')
require('dotenv').config();

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// Configuração do middleware de sessão
app.use(session({
  secret: 'uma_chave_secreta_aqui', // pode ser qualquer string
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // use true se seu site estiver usando HTTPS
}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Usando as rotas definidas
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});