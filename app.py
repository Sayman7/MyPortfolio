from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# Vercel needs this for proper handling
def handler(event, context):
    return app(event, context)

if __name__ == "__main__":
    app.run(debug=True)
