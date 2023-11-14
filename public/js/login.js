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
            const passwordEmailCombinationWarning = document.getElementById('passwordEmailCombinationWarning');
            passwordEmailCombinationWarning.classList.remove("hidden");
                window.setTimeout(function () {
                    passwordEmailCombinationWarning.classList.add("hidden");
                }, 10000);
            
            // alert('Failed to log in');
        }
    }
};

const handleSignup = () =>document.location.replace('/signup');

function dashboard() {
    document.location.replace('/');
}

function home() {
    document.location.replace('/home');
}

document.getElementById('dashboard').addEventListener('click', dashboard);
document.getElementById('home').addEventListener('click', home);


document 
    .getElementById('login-form')
    .addEventListener('submit', loginFormHandler);

document
    .getElementById('signupButton')
    .addEventListener('click', handleSignup);