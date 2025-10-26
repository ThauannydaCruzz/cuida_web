// Importa o cliente Supabase (do seu arquivo /db/database.js)
const supabase = require('../db/database');
const bcrypt = require('bcryptjs');

class Cliente {
  static async createCliente(data) {
    const salt = await bcrypt.genSalt(10);
    const senha_hash = await bcrypt.hash(data.password, salt);

    const { data: novoCliente, error } = await supabase
      .from('paciente')
      .insert({
        nome_completo: data.nome,
        idade: data.idade,
        endereco_completo: data.endereco,
        cpf: data.cpf,
        rg: data.rg,
        email: data.email,
        telefone: data.telefone,
        carteirinha_sus: data.carteirinha,
        tipo_sanguineo: data.tipoSanguineo,
        medicamentos_restritos: data.medicamentosRestritos,
        problemas_saude: data.diagnosticos,
        senha_hash: senha_hash
      })
      .select()
      .single();

    if (error) {
      console.error('Erro ao criar cliente:', error.message);
      return null;
    }

    return novoCliente;
  }

  static async loginCliente(data) {
    const { data: cliente, error } = await supabase
      .from('paciente')
      .select('*')
      .eq('cpf', data.cpf)
      .single();

    if (error || !cliente) {
      return null;
    }

    const senhaCorreta = await bcrypt.compare(
      data.password,
      cliente.senha_hash
    );

    if (!senhaCorreta) {
      return null;
    }

    delete cliente.senha_hash;
    return cliente;
  }

  static async getUnidade() {
    const { data, error } = await supabase
      .from('unidade')
      .select(`
        name:nome_unidade,
        address:endereco,
        lat:latitude,
        lon:longitude
      `);

    if (error) {
      return [];
    }

    return data;
  }
}

module.exports = Cliente;