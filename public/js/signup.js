const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    const confirmPassword = document.getElementById('password-confirm').value.trim();

    if (password === confirmPassword) {
        if (username && email && password) {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                document.location.replace('/');
            } else {
                //message for a failed signup, specifically needs changing to specify the error
                alert('Failed to sign up.');
            }
        }
    } else {
        const noPasswordMatchEl = document.getElementById('noPasswordMatchEl');

        noPasswordMatchEl.classList.remove("hidden");
        window.setTimeout(function(){
            noPasswordMatchEl.classList.add("hidden");
            // noPasswordMatchEl.classList.add()
          }, 10000);
    }
    
};

const handleLogin = () => document.location.replace('/login');

document
    .getElementById('signup-form')
    .addEventListener('submit', signupFormHandler);

document
    .getElementById('loginButton')
    .addEventListener('click', handleLogin);