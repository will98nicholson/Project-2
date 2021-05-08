// const responseStatus = response.statusText;

const signupFunction = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if(password.length < 8){
        alert("password must be 8 characters or more!")
    }
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(email.match(mailformat)){
        alert("You have entered a valid email address!");    //The pop up alert for a valid email address
        }
        else
        {
        console.log('valid email entered')   //The pop up alert for an invalid email address
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