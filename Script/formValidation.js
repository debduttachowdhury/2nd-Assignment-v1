// let email= document.getElementById("email");

let phone= document.getElementById("phone");
let error= document.getElementById("error");
let pwd= document.getElementById("pwd");

 function validate(){
    if (phone.value.length<10){
        alert ("phone number should of 10 digit");
        return false;}

    else if (pwd.value.length<8){
        alert("password needs to be min 8 charecter");
        return false
        }
  
    else {return true}
        
 }

//  function validate(){


    
//  }



//     function validate(){

//     let regularexpression = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    
//     if(regularexpression.test(email.value)){
        
//         error.innerHTML = "Valid";
//         error.style.color= "green";
//         if (pwd.value.length<6){

//             alert("Password needs to be min 6 letter");
//             pwd.style.border="2px solid red";
//             return false;
//         }
    
//         else if (pwd.value==""){
//             alert ("password can't be blank");
//             return false;
//         }
        
    
//         else{ return true;
        
//         }
//         return true;
                
//     }

//     else {

//         error.innerHTML= "invalid";
//         error.style.color= "red";
//         return false;
        
//     } 
// }
