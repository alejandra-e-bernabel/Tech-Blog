const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        //code for what to do if the logout does not work
        alert(response.statusText);
    }
};

document.getElementById('logout').addEventListener('click', logout);

