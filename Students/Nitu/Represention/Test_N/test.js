
function myform(){
    let name=document.getElementById("name").value
    let email=document.getElementById("emal").value
    let dob=document.getElementById("dat").value
    let phone=document.getElementById("num").value
    
    
     
    if(name == ""){
    
         document.getElementById("snam").innerHTML="***please fill the name"
        return false;
    };
    
    if(email == ""){
         document.getElementById("sEmal").innerHTML="***please fill the email"
        return false;
    };
    
    if(dob == ""){
        
        document.getElementById("sdat").innerHTML="***please fill the dob"
        return false;
    };
    if(phone == ""){
        document.getElementById("snum").innerHTML="***please fill the phone no"
        return false;
    };
    
    let table= `
    <tr>
    <td>${name}
    <td>${ email}
    <td>${dob}
    <td>${phone}
    </tr>
    `;
      document.getElementById("dtalist").innerHTML +=table;
     
     document.getElementById("name").innerHTML="";
     document.getElementById("email").innerHTML="";
     document.getElementById("dat").innerHTML="";
     document.getElementById("num").innerHTML="";
     }
    
       
         
         
    
    



