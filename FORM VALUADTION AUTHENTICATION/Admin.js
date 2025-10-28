function fetchdatauser(event){
  event.preventDefault()
  const para=document.getElementById("para-1")
  // const heading= document.getElementById("heading-tag")
  const storevalue=JSON.parse(localStorage.getItem("userdetails")) 
  const user=storevalue.filter(ud=>ud.Role==="user")



  if(user.length==0){
    para.innerText="user not Found"
    return; 
  }
  let output = `<table style="border: 1px solid white; padding: 10px;">
  <tr>
    <th style="border: 1px solid white; padding: 10px;color:black">Name</th>
    <th style="border: 1px solid white; padding: 10px;color:black">PhoneNumber</th>
    <th style="border: 1px solid white; padding: 10px;color:black">Email</th>
    <th style="border: 1px solid white; padding: 10px;color:black">Password</th>
   <th style="border: 1px solid white; padding: 10px;color:black">Role</th>
   </tr>`;
  for(let i=0;i<user.length;i++){
    output += `<tr>
    <td style="border: 1px solid white; padding: 10px;">${user[i].Name}</td>
    <td style="border: 1px solid white; padding: 10px;">${user[i].PhoneNumber}</td>
    <td style="border: 1px solid white; padding: 10px;">${user[i].Email}</td>
    <td style="border: 1px solid white; padding: 10px;">${user[i].password}</td>
    <td style="border: 1px solid white; padding: 10px;">${user[i].Role}</td>
   </tr> `;
  }

  output+=`</table>`

  // output.style.border="2px solid red"
  para.innerHTML=output
  const para1 = document.getElementById("para-2");
  const storevalue2 = JSON.parse(localStorage.getItem("userdetails"))||[]
  const user1 = storevalue2.filter((ud1) => ud1.Role === "staff");

  if (user1.length == 0) {
    para1.innerText = "user not Found";
    return;
  }
  let output1 = `<table style="border: 1px solid white; padding: 10px;">
  <tr>
    <th style="border: 1px solid white; padding: 10px; color:black">Name</th>
    <th style="border: 1px solid white; padding: 10px;color:black">PhoneNumber</th>
    <th style="border: 1px solid white; padding: 10px;color:black">Email</th>
    <th style="border: 1px solid white; padding: 10px;color:black">Password</th>
   <th style="border: 1px solid white; padding: 10px;color:black">Role</th>
   </tr>`
  for (let i = 0; i < user1.length; i++) {
    output1 += `<tr>
    <td style="border: 1px solid white; padding: 10px;">${user1[i].Name}</td>
    <td style="border: 1px solid white; padding: 10px;">${user1[i].PhoneNumber}</td>
    <td style="border: 1px solid white; padding: 10px;">${user1[i].Email}</td>
    <td style="border: 1px solid white; padding: 10px;">${user1[i].password}</td>
    <td style="border: 1px solid white; padding: 10px;">${user1[i].Role}</td>
   </tr> `;
  }

  output1 += `</table>`;

  // output.style.border="2px solid red"
  para1.innerHTML = output1; 
  
}
window.onload=fetchdatauser;


