function validateEmail(email) {
    console.log("Email validated");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    const confirmPassword = document.getElementById('password-confirm').value.trim();

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword && password.length >= 8 && validateEmail(email)) {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                const repeatedEmailWarning = document.getElementById('repeatedEmailWarning');

                repeatedEmailWarning.classList.remove("hidden");
                window.setTimeout(function () {
                    repeatedEmailWarning.classList.add("hidden");
                }, 10000);
                //message for a failed signup, specifically needs changing to specify the error
                // alert('Failed to sign up.');
            }

        } else {
            if (password.length<8) {
                const passwordLengthError = document.getElementById('passwordLengthError');

                passwordLengthError.classList.remove("hidden");
                window.setTimeout(function () {
                    passwordLengthError.classList.add("hidden");
                }, 10000);
            } 
            
            if(password !== confirmPassword) {
                const noPasswordMatchEl = document.getElementById('noPasswordMatchEl');

                noPasswordMatchEl.classList.remove("hidden");
                window.setTimeout(function () {
                    noPasswordMatchEl.classList.add("hidden");
                }, 10000);
            }

            if (!validateEmail(email)) {
                const emailVerificationWarning = document.getElementById('emailVerificationWarning');

                emailVerificationWarning.classList.remove("hidden");
                window.setTimeout(function () {
                    emailVerificationWarning.classList.add("hidden");
                }, 10000);
            }
        }
    } else {
        const elementsMissingWarning = document.getElementById('elementsMissingWarning');

        elementsMissingWarning.classList.remove("hidden");
        window.setTimeout(function () {
            elementsMissingWarning.classList.add("hidden");
        }, 10000);

    };
};

    const handleLogin = () => document.location.replace('/login');

    document
        .getElementById('signup-form')
        .addEventListener('submit', signupFormHandler);

    document
        .getElementById('loginButton')
        .addEventListener('click', handleLogin);