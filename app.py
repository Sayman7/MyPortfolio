from flask import Flask, render_template

app = Flask(__name__, template_folder="templates")  # Ensure the templates folder is used

@app.route('/')
def home():
    return render_template('index.html')

# The app is exposed as a Vercel handler
def handler(event, context):
    return app(event, context)

if __name__ == "__main__":
    app.run()
