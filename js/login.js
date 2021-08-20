document.getElementById("submit-btn").addEventListener("click", function(){
    // getting email
    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    //getting password
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    
    //check email and password 
    if(email == "imran@gmail.com" && password == "secret"){
        window.location.href="banking.html"
    }else{
        console.log("not valid");
    }
    
})