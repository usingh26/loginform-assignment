const registerNavBtn = document.getElementById("register-nav-btn");
const loginNavBtn = document.getElementById("login-nav-btn");
const usersNavBtn = document.getElementById("users-nav-btn");

const registerSection = document.getElementById("register-section");
const loginSection = document.getElementById("login-section");
const usersSection = document.getElementById("users-section");

// by default we are showing login section only
registerSection.style.display = "none";
loginSection.style.display = "block";
usersSection.style.display = "none";

// hiding/showing section based on button clicked
registerNavBtn.addEventListener("click", function () {
  registerSection.style.display = "block";
  loginSection.style.display = "none";
  usersSection.style.display = "none";
});

loginNavBtn.addEventListener("click", function () {
  registerSection.style.display = "none";
  loginSection.style.display = "block";
  usersSection.style.display = "none";
});

usersNavBtn.addEventListener("click", function () {
  registerSection.style.display = "none";
  loginSection.style.display = "none";
  usersSection.style.display = "block";
});

//1. handling the register form submission

const registerForm = document.getElementById("register-form");
const registerMsg = document.getElementById("register-message");
let users = [];

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  const role = document.getElementById("role").value;

  //   validating if gender selected or not
  const selectedGender = document.querySelector(
    'input[name="gender"]:checked'
);

if (!selectedGender) {
    showRegisterMessage(
        "Please select your gender!",
        "error-message"
    );
    return;
}

const gender = selectedGender.value;

const user = {
    email: email,
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    role: role,
};


// validating if user already exists

const usernameExists = users.some(function (existingUser) {
    return existingUser.username === username;
});

if (usernameExists) {
    showRegisterMessage(
        "Username already exists!",
        "error-message"
    );
    return;
}


const emailExists = users.some(function (existingUser) {
    return existingUser.email === email;
});

if (emailExists) {
    showRegisterMessage(
        "Email already exists!",
        "error-message"
    );
    return;
}


// registration successful

users.push(user);

showRegisterMessage(
    "Registration successful!",
    "success-message"
);
function showRegisterMessage(message, type) {
    registerMsg.textContent = message;
    registerMsg.className = type;
}


// clearing form after successful registration

registerForm.reset();

  // console.log(user);
});