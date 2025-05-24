// routes/index.js
const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/taskController');
const loginController = require('../controllers/loginController');
const authController = require('../controllers/authController');

// Rotas para o CRUD de tarefas
router.post('/tarefas', tarefaController.criarTarefa);
router.get('/tarefas', tarefaController.listarTarefas);
router.put('/tarefas/:id', tarefaController.editarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);

// Rotas para o CRUD de login
router.get('/', loginController.renderLogin);
router.post('/', loginController.login);

router.get('/register', authController.renderRegister);
router.post('/register', authController.register);

module.exports = router;