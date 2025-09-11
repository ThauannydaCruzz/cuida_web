const Cidadao = require('../models/cidadao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerCidadao = async (req, res) => {
  const { nome, idade, endereco, cpf, rg, email, telefone, carteirinha, tipoSanguineo, medicamentosRestritos, diagnosticos, password } = req.body;

  if (!nome || !idade || !endereco || !cpf || !rg || !email || !telefone || !password) {
    return res.status(400).json({ mensagem: "Preencha todos os campos obrigatórios." });
  }

  const existingClient = Cidadao.findByEmail(email);
  if (existingClient) {
    return res.status(409).json({ mensagem: "Cliente já cadastrado." });
  }

  try {
    const newClient = await Cidadao.create({ nome, idade, endereco, cpf, rg, email, telefone, carteirinha, tipoSanguineo, medicamentosRestritos, diagnosticos, password });
    res.status(201).json({ mensagem: "Cadastro do cidadão realizado com sucesso!", cliente: newClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

const loginCidadao = async (req, res) => {
  const { email, password } = req.body;

  const client = Cidadao.findByEmail(email);
  if (!client) {
    return res.status(400).json({ mensagem: "E-mail ou senha incorretos." });
  }

  const isPasswordValid = await bcrypt.compare(password, client.password);
  if (!isPasswordValid) {
    return res.status(400).json({ mensagem: "E-mail ou senha incorretos." });
  }

  const token = jwt.sign(
    { id: client.id, nome: client.nome, email: client.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ mensagem: "Login bem-sucedido!", token });
};

module.exports = { registerCidadao, loginCidadao };