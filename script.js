const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateInput()) {
        redirectToPortfolio();
    }
});

function validateInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();
    let isValid = true;

    // Username Checker
    if (usernameValue === '') {
        setError(username, "Username is required");
        isValid = false;
    } else {
        setSuccess(username);
    }

    // Email Checker
    if (emailValue === '') {
        setError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid Email Address");
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Password Checker
    if (passwordValue === '') {
        setError(password, "Password is required");
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters long");
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Confirm Password Checker
    if (cPasswordValue === '') {
        setError(cPassword, "Please Confirm Your Password");
        isValid = false;
    } else if (cPasswordValue !== passwordValue) {
        setError(cPassword, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(cPassword);
    }

    return isValid;
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

function isValidEmail(email) {
    // Regular expression pattern for email validation
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function redirectToPortfolio() {
    window.location.href = "portfolio/index.html";
}
