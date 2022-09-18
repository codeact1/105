//object constructor

function User(firstName,lastName,email,age,password,gender,address,phone,payment,color){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.password=password;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    
  
}

 function isValid(User){
    
      let valid =true;
      $("input").removeClass("input-error");
      if(User.email ==""){
         valid=false;
        $("#userEmail").addClass("input-error");
         console.log("Please enter required information");
        }
        if(User.name==""){ 
            valid=false;
             $("#userName").addClass("input-error");
            console.log("Please enter required information"); 
        }
        if(User.phone==""){ 
            valid=false;
             $("#userPhone").addClass("input-error");
            console.log("Please enter required information"); 
        } 
        if(User.password.legth==0){
            valid=false;
            $("#userPassword").addClass("input-error");
        } 
        return valid;
}
function validatePass(){
    console.log("validating ");
    let inputPass = $("#userPassword");//getting the input #userPassword
    let password = inputPass.val();//getting the value
    if(password.length<6){
        inputPass.css("background-color","red");
        console.log("The password is too short");
        displayError("The password is too short");
    }else{
            inputPass.css("background-color","green"); 
            console.log("The password is correct extension");
            displayError("The password is correct extension");   
            hideError();
    };
}

function displayError(msg){
    $("#alert-error").removeClass("hide").text(msg);//shoeing the alert area
}

function hideError(){
    $("#alert-error").addClass("hide");//hidding the alert area
}
function register(){
    //getting the values from the inputs
    let txtFirstName = $("#userFirstName").val();
    let txtLastName = $("#userLastName").val();
    let txtEmail = $("#userEmail").val();
    let txtAge = $("#userAge").val();
    let txtPassword = $("#userPassword").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtPhone = $("#userPhone").val();
    let selPayment = $("#userPayment").val();
    let selColor = $("#userColor").val();
    

    console.log(txtFirstName,txtLastName,txtEmail,txtAge,txtPassword,txtGender,txtAddress,txtPhone,selPayment,selColor);

    //create the user obj
    let aUser = new User(txtFirstName,txtLastName,txtEmail,txtAge,txtPassword,txtGender,txtAddress,txtPhone,selPayment,selColor);
    //display the object in the console

    if(isValid(aUser)){
    saveUser(aUser);
    //clear inputs jquery
    $("input").val("");
     }else{
       console.log("Please complet all the fields"); 
       displayError("Please complet all the fields");
     }
}

function init(){
    //hook event
    $("#btnSave").on("click", register);
    $("h1").on("click",function(){
        $("nav").hide();
    });
    $(".form-container").hide();

    $("#btnShowForm").on("click",function(){
        //$(".form-container").show();
        $(".form-container").slideDown(1000);
    });

     $("#closeForm").on("click",function(){
        $(".form-container").slideUp(2000);
     });

     $("#userPassword").keyup(validatePass);
}
    


window.onload=init;