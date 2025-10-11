import bcrypt
import jwt
import os
from datetime import datetime, timedelta
from src.data_access import load_database, save_database
from flask import jsonify

# --- Funções de Funcionário ---

class Funcionario:
    @staticmethod
    def find_by_email(email):
        db = load_database()
        return next((u for u in db.get('users', []) if u['email'] == email), None)

    @staticmethod
    def create(data):
        db = load_database()
        hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        new_user = {
            'id': len(db.get('users', [])) + 1,
            'nome': data['nome'],
            'email': data['email'],
            'password': hashed_password,
            'matricula': data['matricula'],
            'departamento': data['departamento'],
            'cargo': data['cargo'],
            'role': 'funcionario'
        }
        db['users'].append(new_user)
        save_database(db)
        return new_user

    @staticmethod
    def create_token(user_id, nome, role):
        payload = {
            'id': user_id,
            'nome': nome,
            'role': role,
            'exp': datetime.utcnow() + timedelta(hours=1), 
            'iat': datetime.utcnow()
        }
        return jwt.encode(payload, os.environ.get('JWT_SECRET'), algorithm='HS256')

# --- Funções de Cidadão ---

class Cidadao:
    @staticmethod
    def find_by_email(email):
        db = load_database()
        return next((c for c in db.get('clients', []) if c['email'] == email), None)

    @staticmethod
    def create(data):
        db = load_database()
        hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        new_client = {
            'id': len(db.get('clients', [])) + 1,
            'nome': data['nome'],
            'idade': data.get('idade'),
            'endereco': data.get('endereco'),
            'cpf': data.get('cpf'),
            'rg': data.get('rg'),
            'email': data['email'],
            'telefone': data.get('telefone'),
            'carteirinha': data.get('carteirinha'),
            'tipoSanguineo': data.get('tipoSanguineo'),
            'medicamentosRestritos': data.get('medicamentosRestritos'),
            'diagnosticos': data.get('diagnosticos'),
            'password': hashed_password,
        }
        db['clients'].append(new_client)
        save_database(db)
        return new_client

    @staticmethod
    def create_token(client_id, nome, email):
        payload = {
            'id': client_id,
            'nome': nome,
            'email': email,
            'exp': datetime.utcnow() + timedelta(hours=1),
            'iat': datetime.utcnow()
        }
        return jwt.encode(payload, os.environ.get('JWT_SECRET'), algorithm='HS256')