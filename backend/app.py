from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

from src.routes import auth_routes, public_routes
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(public_routes, url_prefix='/api/publico')

@app.route('/')
def hello_world():
    return jsonify({"mensagem": "API CUIDA (Flask) rodando!"})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=port, debug=True)