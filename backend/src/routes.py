from flask import Blueprint, request, jsonify
from src.models import Funcionario, Cidadao
import bcrypt

auth_routes = Blueprint('auth', __name__)
public_routes = Blueprint('publico', __name__)

# --- ROTAS DE FUNCIONÁRIO (AuthRoutes) ---

@auth_routes.route('/cadastro', methods=['POST'])
def register_funcionario():
    data = request.get_json()
    if not all(k in data for k in ['nome', 'email', 'password', 'matricula', 'departamento', 'cargo']):
        return jsonify({"mensagem": "Preencha todos os campos obrigatórios!"}), 400

    if Funcionario.find_by_email(data['email']):
        return jsonify({"mensagem": "Usuário já cadastrado!"}), 409

    try:
        new_user = Funcionario.create(data)
        token = Funcionario.create_token(new_user['id'], new_user['nome'], new_user['role'])
        return jsonify({"mensagem": "Usuário cadastrado com sucesso!", "token": token}), 201
    except Exception as e:
        print(e)
        return jsonify({"mensagem": "Erro interno do servidor."}), 500

@auth_routes.route('/login', methods=['POST'])
def login_funcionario():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = Funcionario.find_by_email(email)
    if not user:
        return jsonify({"mensagem": "E-mail ou senha incorretos."}), 400

    if not bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
        return jsonify({"mensagem": "E-mail ou senha incorretos."}), 400

    token = Funcionario.create_token(user['id'], user['nome'], user['role'])
    return jsonify({"mensagem": "Login bem-sucedido!", "token": token}), 200

# --- ROTAS DE CIDADÃO (PublicRoutes) ---

@public_routes.route('/cadastro-cidadao', methods=['POST'])
def register_cidadao():
    data = request.get_json()
    if not all(k in data for k in ['nome', 'email', 'password', 'cpf']):
        return jsonify({"mensagem": "Nome, e-mail, senha e CPF são obrigatórios."}), 400

    if Cidadao.find_by_email(data['email']):
        return jsonify({"mensagem": "Cliente já cadastrado."}), 409

    try:
        new_client = Cidadao.create(data)
        return jsonify({"mensagem": "Cadastro do cidadão realizado com sucesso!", "cliente": new_client}), 201
    except Exception as e:
        print(e)
        return jsonify({"mensagem": "Erro interno do servidor."}), 500

@public_routes.route('/login-cidadao', methods=['POST'])
def login_cidadao():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    client = Cidadao.find_by_email(email)
    if not client:
        return jsonify({"mensagem": "E-mail ou senha incorretos."}), 400

    if not bcrypt.checkpw(password.encode('utf-8'), client['password'].encode('utf-8')):
        return jsonify({"mensagem": "E-mail ou senha incorretos."}), 400

    token = Cidadao.create_token(client['id'], client['nome'], client['email'])
    return jsonify({"mensagem": "Login bem-sucedido!", "token": token}), 200