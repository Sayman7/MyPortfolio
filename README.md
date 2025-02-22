<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h2>Register</h2>
    <form method="post">
        {% csrf_token %}
        <label>Username:</label>
        <input type="text" name="username" required><br><br>

        <label>Email:</label>
        <input type="email" name="email" required><br><br>

        <label>Password:</label>
        <input type="password" name="password1" required><br><br>

        <label>Confirm Password:</label>
        <input type="password" name="password2" required><br><br>

        <button type="submit">Register</button>
    </form>
    <p>Already have an account? <a href="{% url 'login' %}">Login here</a>.</p>
</body>
</html>
{% if messages %}
    {% for message in messages %}
        <div class="alert alert-{{ message.tags }}">
            {{ message }}
        </div>
    {% endfor %}
{% endif %}
