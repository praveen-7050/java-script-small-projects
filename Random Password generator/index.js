function randompasswordgeneator(){
    let characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$&?#%";
    let len=10;
    let password="";

    for(let i = 0;i < len;i++){
        let randomchar=Math.floor(Math.random()*characters.length);
        password +=characters[randomchar];
    }
   document.getElementById("password").value=password

}

function copyclipboard(){
    let copy=document.getElementById("password").value
    navigator.clipboard.writeText(copy);
    alert("password is copied "+ password.value )
       document.getElementById("password").value=""
}

