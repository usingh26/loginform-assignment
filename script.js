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

//2. showing all users in the users section

const usersList = document.getElementById("users-list");

usersNavBtn.addEventListener("click", function () {

    registerSection.style.display = "none";
    loginSection.style.display = "none";
    usersSection.style.display = "block";

    renderUsers();
});

// renderUsers function is to take user data and
//  convert it into visible HTML or UI elements to
//   display on a web page or application interface
function renderUsers() {

    // here Clearing existing users from UI
    usersList.innerHTML = "";


    // Checking if there are no users
    if (users.length === 0) {

        usersList.textContent = "No users registered yet.";

        return;
    }


    // fetching all users
    users.forEach(function (user) {

        // Creating container
        const userElement = document.createElement("div");


        // Adding user information
        userElement.innerHTML = `
            <p>Username: ${user.username}</p>
            <p>Name: ${user.firstName} ${user.lastName}</p>
            <p>Email: ${user.email}</p>
            <p>Gender: ${user.gender}</p>
            <p>Role: ${user.role}</p>
            <hr>
        `;


        // Add user to users list
        usersList.appendChild(userElement);
    });
}


// 3. handling the login form submission here

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;


    // Find user by username
    const user = users.find(function (existingUser) {
        return existingUser.username === username;
    });


    // Username doesn't exist
    if (!user) {
        showLoginMessage(
            "Username not found!",
            "error-message"
        );

        return;
    }


    // Password doesn't match
    if (user.password !== password) {
        showLoginMessage(
            "Incorrect password!",
            "error-message"
        );

        return;
    }


    // Login successful
    showLoginMessage(
        "Login successful!",
        "success-message"
    );

});
function showLoginMessage(message, type) {
    loginMessage.textContent = message;
    loginMessage.className = type;
}