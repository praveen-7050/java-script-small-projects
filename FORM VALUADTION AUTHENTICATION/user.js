function userdata(){
    

    let heading = document.getElementById("heading-tag");

    const storage=JSON.parse(localStorage.getItem("userdetails"))||[]
    let currentEmail = localStorage.getItem("currentEmail");
    const retrive=storage.find(userdetail=>userdetail.Email ===currentEmail)

          if(retrive){
             heading.innerHTML="Welcome to Racecraft Technonolgies " + retrive.Name;
          }else{
            heading.innerHTML="user not found"
          }
}
window.onload=userdata;