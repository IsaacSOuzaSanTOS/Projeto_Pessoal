const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.renderLogin = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(401).send('Usuário não encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Senha incorreta');
    }

    // Salva o usuário na sessão (para usar depois em req.session.user)
    req.session.user = {
      id: user.id,
      email: user.email,
      // qualquer outra info que quiser salvar
    };

    // Login bem-sucedido → redireciona para /tarefas
    res.redirect('/tarefas');
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no login');
  }
};