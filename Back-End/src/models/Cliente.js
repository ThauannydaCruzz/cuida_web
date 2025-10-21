const pool = require("../db/database");
const bcrypt = require('bcryptjs');

class Cliente {
  static async cratedCliente(data) {
    const query =
      `INSERT INTO cliente (
      nome_completo,
      idade,
      endereco_completo,
      cpf,
      rg,
      email,
      telefone,
      carteirinha_sus,
      tipo_sanguineo,
      medicamentos_restritos,
      problemas_saude,
      senha_hash
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *`;

    const values = [
      data.nome,
      data.idade,
      data.endereco,
      data.cpf,
      data.rg,
      data.email,
      data.telefone,
      data.carteirinha,
      data.tipoSanguineo,
      data.medicamentosRestritos,
      data.diagnosticos,
      data.password,
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  };

  static async loginCliente(data) {
    const query = "SELECT * FROM cliente WHERE cpf = $1 AND senha_hash = $2";
    const values = [
      data.cpf,
      data.password
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getUnidade() {
    const result = await pool.query("SELECT nome_unidade AS name, endereco AS address, CAST(latitude AS FLOAT) AS lat, CAST(longitude AS FLOAT) AS lon FROM unidade");

    return result.rows;
  }

}
module.exports = Cliente;