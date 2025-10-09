function randompasswordgenerator() {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$&?#%";
  let len = 10;
  let password = "";

  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyclipboard() {
  let passwordField = document.getElementById("password");
  let copy = passwordField.value;

  if (copy === "") {
    alert("Please generate a password first!");
    return;
  }

  navigator.clipboard
    .writeText(copy)
    .then(() => {
      alert("Password copied: " + copy);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
