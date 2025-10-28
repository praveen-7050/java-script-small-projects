function login(e){
e.preventDefault()
    const emaillog=document.getElementById("Email-log").value
    const passlog=document.getElementById("pass-log").value

    let customer=JSON.parse(localStorage.getItem("userdetails")) 
    const founduser=customer.find(user=>user.Email===emaillog && user.password===passlog)
    if (founduser) {
      alert("Welcome to Racecraft Technonolgies " + founduser.Name + " Login Successfull");

      if (founduser.Role === "Admin") {
        localStorage.setItem("currentEmail", emaillog);
        window.location.href = "./Admin.html";
      } else if (founduser.Role === "user") {
        window.location.href = "./user.html";
      } else if (founduser.Role === "staff") {
        window.location.href ="./staff.html";
      }
    } else {
      alert("Email id or password invalid please check again");
    }
}

