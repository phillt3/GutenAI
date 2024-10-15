from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return {"message": "Hello, World!"}

if __name__ == '__main__':
    app.run(debug=True)
    
#To Run, make sure venv is active, can do this by selecting it as the interpreter
#then in terminal cd into backend and then do 'python app.py'
#then go to http://localhost:5000/api