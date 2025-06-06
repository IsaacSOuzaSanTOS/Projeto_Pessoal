// controllers/tarefasController.js
const Tarefa = require('../models/task');

exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.listarPorUsuario(req.session.user.id);
    
    if (req.headers.accept.includes('application/json')) {
      return res.status(200).json(tarefas);
    }

    res.render('tasks', { tarefas });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.criarTarefa = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const novaTarefa = await Tarefa.criar({
      title,
      description,
      status,
      user_id: req.session.user.id
    });

    if (req.headers.accept.includes('application/json')) {
      return res.status(201).json(novaTarefa);
    }

    res.redirect('/tarefas');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  console.log('Editar tarefa chamada, id:', req.params.id);
  try {
    const tarefaAtualizada = await Tarefa.editar(id, { title, description, status, user_id: req.session.user.id });
    if (!tarefaAtualizada) return res.status(404).json({ message: 'Tarefa não encontrada' });
    if (req.headers.accept.includes('application/json')) {
      return res.status(200).json({ tarefaAtualizada });
    }

    res.redirect('/tarefas');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;
  try {
    const deletada = await Tarefa.excluir(id);
    if (!deletada) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.redirect('/tarefas');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
