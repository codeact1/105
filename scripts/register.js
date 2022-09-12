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
    console.log(aUser);
    $("input").val("");
      
}

function init(){}