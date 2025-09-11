const { loadDatabase, saveDatabase } = require('../db/db');
const bcrypt = require('bcryptjs');

const findByEmail = (email) => {
  const db = loadDatabase();
  return db.clients.find(client => client.email === email);
};

const create = async ({ nome, idade, endereco, cpf, rg, email, telefone, carteirinha, tipoSanguineo, medicamentosRestritos, diagnosticos, password }) => {
  const db = loadDatabase();
  const hashedPassword = await bcrypt.hash(password, 10);
  const newClient = {
    id: db.clients.length + 1,
    nome,
    idade,
    endereco,
    cpf,
    rg,
    email,
    telefone,
    carteirinha,
    tipoSanguineo,
    medicamentosRestritos,
    diagnosticos,
    password: hashedPassword, 
  };
  db.clients.clients.push(newClient);
  saveDatabase(db);
  return newClient;
};

module.exports = { findByEmail, create };