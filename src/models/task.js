// models/Tarefa.js
const db = require('../config/database');

module.exports = {
  async criar({ title, description, status, user_id }) {
    const query = `
      INSERT INTO tasks (title, description, status, user_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
    const values = [title, description, status || 'pendente', user_id];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async listarPorUsuario(user_id) {
    const query = 'SELECT * FROM tasks WHERE user_id = $1';
    const result = await db.query(query, [user_id]);
    return result.rows;
  },

  async editar(id, { title, description, status }) {
    const query = `
      UPDATE tasks SET title = $1, description = $2, status = $3
      WHERE id = $4 RETURNING *`;
    const values = [title, description, status, id];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async excluir(id) {
    const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
};
