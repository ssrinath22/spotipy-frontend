from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Allow all origins
CORS(app)

@app.route('/api/token', methods=['POST'])
def receive_token():
    # Extract the token from the incoming request
    data = request.json
    token = data.get('access_token')
    
    if token:
        print(f"Received token: {token}")
        # Process the token as needed here
        return jsonify({"message": "Token received successfully"}), 200
    else:
        return jsonify({"error": "No token provided"}), 400

if __name__ == "__main__":
    app.run(debug=True, port=8000)
