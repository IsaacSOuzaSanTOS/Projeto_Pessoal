const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.renderRegister = (req, res) => {
  res.render('register');
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res.send('E-mail já cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create(name, email, hashedPassword);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar usuário');
  }
};
