const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
let form = document.getElementById('username-field');
let pass = document.getElementById('password-field');
let paragraph1 = document.getElementById('empty-login');
let paragraph2 = document.getElementById('empty-password');

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.accaunt.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        onclick=window.location.href = 'lead-screen.html';
    } else {
        form.classList.remove('name');
        form.classList.add('error');
        pass.classList.remove('password');
        pass.classList.add('error');
        paragraph1.classList.remove('empty-login');
        paragraph1.classList.add('error-text');
        paragraph2.classList.remove('empty-password');
        paragraph2.classList.add('error-text');
    }
})
