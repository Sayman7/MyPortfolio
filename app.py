from flask import Flask, render_template
import os
import pymysql

pymysql.install_as_MySQLdb()

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

def handler(event, context):
    from werkzeug.middleware.proxy_fix import ProxyFix
    app.wsgi_app = ProxyFix(app.wsgi_app)
    return app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))  # Vercel uses 3000
    app.run(host="0.0.0.0", port=port)
