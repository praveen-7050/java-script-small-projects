    function Randomcolorgenerator(){
    let letters="0123456789ABCDEF";
    let colors="#";
    for(let i=0;i<6;i++){
        colors += letters[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor=colors;
    document.getElementById("code").innerHTML=colors;
    let btn = document.getElementById("btn-copy");
    btn.addEventListener("click", () => {
    let code = document.getElementById("code").innerText;
    navigator.clipboard.writeText(code);
    alert("copied "+ code)
    });
    }

