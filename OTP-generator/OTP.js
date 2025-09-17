function otpgenerator(){
    let random = Math.floor( Math.random()*900000)+ 100000;
let  inp = document.getElementById("inp-otp");

inp.value=random

let copy=document.getElementById("btn-copy")


copy.addEventListener("click",()=>{

    navigator.clipboard.writeText(inp.value)
    alert("copied "+ inp.value)
})
}