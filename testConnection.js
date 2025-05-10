const pool = require('./src/config/database');

async function testConnection() {
    try{
        const result = await pool.query('SELECT NOW()');
        console.log('Conexão bem-sucedida!', result.rows[0]);
    } catch (error) {
        console.error('Erro de conexão', error);
    } finally {
        pool.end();
    }
}

testConnection();