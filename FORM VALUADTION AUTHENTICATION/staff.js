function fetchdatastaff(event) {
  event.preventDefault();
  const parastaff = document.getElementById("para-staff");
  const storevaluestaff = JSON.parse(localStorage.getItem("userdetails"));
  const userstaff= storevaluestaff.filter(udstaff => udstaff.Role === "user");

  if (userstaff.length == 0) {
    parastaff.innerText = "user not Found";
    return;
  }
  let outputstaff = `<table style="border: 1px solid white; padding: 10px;">
  <tr>
    <th style="border: 1px solid white; padding: 10px; color:black">Name</th>
    <th style="border: 1px solid white; padding: 10px;color:black">PhoneNumber</th>
    <th style="border: 1px solid white; padding: 10px;color:black">Email</th>
    <th style="border: 1px solid white; padding: 10px;color:black">Password</th>
   <th style="border: 1px solid white; padding: 10px;color:black">Role</th>
   </tr>`;
  for (let i = 0; i < userstaff.length; i++) {
    outputstaff += `<tr>
    <td style="border: 1px solid white; padding: 10px;">${userstaff[i].Name}</td>
    <td style="border: 1px solid white; padding: 10px;">${userstaff[i].PhoneNumber}</td>
    <td style="border: 1px solid white; padding: 10px;">${userstaff[i].Email}</td>
    <td style="border: 1px solid white; padding: 10px;">${userstaff[i].password}</td>
    <td style="border: 1px solid white; padding: 10px;">${userstaff[i].Role}</td>
   </tr> `;
  }

  outputstaff += `</table>`;

  // output.style.border="2px solid red"
  parastaff.innerHTML = outputstaff;  
}
window.onload=fetchdatastaff;