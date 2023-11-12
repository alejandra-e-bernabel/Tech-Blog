const loginFormHandler = async (event) => {
    event.preventDefault();

    //receive user's login data from form
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type' : 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            //html response showing user that the login was not successful for whatever reason
            alert('Failed to log in');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: { 'Content-Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            //message for a failed signup, specifically needs changing to specify the error
            alert ('Failed to sign up.');
        }
    }
};

document 
    .getElementById('login-form')
    .addEventListener('submit', loginFormHandler);

// document 
//     .getElementById('signup-form')
//     .addEventListener('submit', signupFormHandler);