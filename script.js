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