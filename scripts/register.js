//object constructor
function User(firstName,lastName,email,password,age,gender,address,phone,color,payment){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    this.age=age;
    this.gender=gender;
    this.address=address;
    this.phone=phone;
    this.color=color;
    this.payment=payment;
  
}

 function isValid(User){
    
      let valid =true;
      if(User.email =="" || User.password=="" ||User.name==""){
         valid=false;
         alert("Please enter required information");
        }
        return valid;
}


function register(){
    //getting the values from the inputs
    let txtFirstName = $("#userFirstName").val();
    let txtLastName = $("#userLastName").val();
    let txtAge = $("#userAge").val();
    let txtEmail = $("#userEmail").val();
    let txtPassword = $("#userPassword").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtPhone = $("#userPhone").val();
    let selColor = $("#userColor").val();
    let selPayment = $("#userPayment").val();

    console.log(txtFirstName,txtLastName,txtAge,txtEmail,txtPassword,txtGender,txtAddress,txtPhone,selColor,selPayment);

    //create the user obj
    let aUser = new User(txtFirstName,txtLastName,txtAge,txtEmail,txtPassword,txtGender,txtAddress,txtAge,txtPhone,selColor,selPayment);
    //display the object in the console

    if(isValid(aUser)){
    saveUser(aUser);
    //clear inputs jquery
    $("input").val("");
     } 
}

function init(){
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

    }


window.onload=init;