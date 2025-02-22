from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# Required for Vercel (Lambda handler)
def handler(event, context):
    return app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))  # Vercel uses 3000
    app.run(host="0.0.0.0", port=port)
