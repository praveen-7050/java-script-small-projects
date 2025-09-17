let form = document.getElementById("form");
let username = document.getElementById("userinp"); 
let email = document.getElementById("emailinp");
let pass = document.getElementById("passwordinp");
let pass1 = document.getElementById("conpasswordinp");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const passval = pass.value.trim();
  const pass2val = pass1.value.trim();

  // username
  if (usernameval === "") {
    setError(username, "Username cannot be blank");
  } else {
    setSuccess(username);
  }

  // email
  if (emailval === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailval)) {
    setError(email, "Not a valid Email");
  } else {
    setSuccess(email);
  }

  // password
  if (passval === "") {
    setError(pass, "Password cannot be blank");
  } else {
    setSuccess(pass);
  }

  // confirm password
  if (pass2val === "") {
    setError(pass1, "Password cannot be blank");
  } else if (passval !== pass2val) {
    setError(pass1, "Passwords do not match");
  } else {
    setSuccess(pass1);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("error");
  formControl.classList.remove("success");
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("success");
  formControl.classList.remove("error");
  small.innerText = "";
}

function isEmail(email) {
  const special = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return special.test(email);
}
