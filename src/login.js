let waring="";
let test=true;
function emailValidation(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!email.match(mailformat))
{
  
    waring+="- email is not valid \n"
    test=false
    

}
   
}
function passwordValidation(password)
{
    var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(password)){
        waring+='- only @ is allowed as a special character in the  password \n'
        test= false
    }
   
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(!password.match(upperCaseLetters)) {
      
       waring+='- password must  contain an uppercase letter\n'
        test =false
    } 
  
    // Validate numbers
    let numbers = /[0-9]/g;
    if(!password.match(numbers)) {
      
        waring+='- password must contain a number \n'
        test=false
    } 
  
    
}
function validateForm()
{
    const email=document.getElementById("email").value
    const password=document.getElementById("pass").value
    console.log(email)
    console.log(password)
    emailValidation(email)
    passwordValidation(password)
    if (!test)
         {
             alert(waring)
             waring="";
             test=true;
             return false
         }
    else if(password==="SmartServTest@123")
    {
       return true
    }
    else{
        alert("password wrong")
        return false
    }
    return false;


}