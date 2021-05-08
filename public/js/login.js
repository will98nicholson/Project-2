// const responseStatus = response.statusText;
function validateEmail(data) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(data);
}
const signupFunction = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if (password.length < 8) {
        alert("password must be 8 characters or more!")
    }

    if (validateEmail(email)) {
        alert(email + "is a valid email");
    } else {
        alert(email + " is not a valid email");
    }
    if (name && email && password) {
        const response = await fetch('/api/user-routes', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            console.log(response.statusText);
        }
    }
}
const loginFunction = async (event) => {
    event.preventDefault();

    // Login values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // POST API request 
        const response = await fetch('/api/user-routes/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Successful login sends to profile handlebar
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFunction);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFunction);