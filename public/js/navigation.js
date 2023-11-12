function login() {
    document.location.replace('/login');
}

function signup() {
    document.location.replace('/signup');
}

function dashboard() {
    document.location.replace('/');
}


document.getElementById('login').addEventListener('click', login);
document.getElementById('signup').addEventListener('click', signup);
document.getElementById('dashboard').addEventListener('click', dashboard);

