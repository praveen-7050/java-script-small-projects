function valid(event){
    event.preventDefault();
    let nameinp = document.getElementById("name-id").value;
    let phoneinp = document.getElementById("phone-id").value;
    let emailinp = document.getElementById("email-id").value;
    let passinp = document.getElementById("pass-id").value;
    let roleinp=document.getElementById("role-id").value
    let message = document.querySelectorAll(".class");
    
  message.forEach(msg=>msg.innerHTML="")

  if (nameinp.trim() === "" ||  !isNaN(nameinp))
      {
        document.getElementById("small-name-id").innerHTML = "Name is not valid";
        return;  
  }
  if(phoneinp===""|| phoneinp.trim().length!==10){
        document.getElementById("small-phone-id").innerHTML="PhoneNumber is not valid ";
          return;     
  }
  if (emailinp === "" || emailinp.length <= 10 || !emailinp.includes("@") || !emailinp.includes(".")) {
    document.getElementById("small-email-id").innerHTML = "your email is not valid";
      return;
  }
  if(passinp===""||  passinp==="password"|| passinp.length<=8){  
   document.getElementById("small-pass-id").innerHTML ="your password is not valid";
    return;
}
let userdetails={
    Name:nameinp, 
    PhoneNumber:phoneinp,
    Email:emailinp,
    password:passinp,
    Role:roleinp
}
  let user=JSON.parse(localStorage.getItem("userdetails")) || []
  for(i=0;i<user.length;i++){
    if(user[i].Email===emailinp){
    alert("email already exist")
    return; 
    }
    }
  user.unshift(userdetails);
  localStorage.setItem("userdetails", JSON.stringify(user));
  // if (user){
  //   alert("user registartion sucessfully");
  // }else{
  //   Window.location.href="../Login form/Login.html"
  // }


document.getElementById("name-id").value="";
document.getElementById("phone-id").value="";
document.getElementById("email-id").value="";
document.getElementById("pass-id").value="";
// document.getElementById("role-id").value="";
}



