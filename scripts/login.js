function login(){
 console.log("login function")
// get the values from email and password
let userName=$("#userName").val();
let password=$("#userPass").val();

//flag

//get the users from LS
let users = readUsers();

//travel the array
for(let i=0;i<users.length;i++){
//compare the credentials
let user = users[i];
if(user.password == password && user.email==userName){
    //redirect user to the users.html
    console.log("welcome");
    window.location="users.html";

}
else{
    flag=false;
    console.log("invalid cereditals");
}

}
//display the msg invalid credentials
if(!flag){
    $("#alert-error").removeclass("hide");
    setTimeout(function(){
        $("#alert-erorr").addClass("hide");
    },3000);
}

}


function init(){
$("#loginBtn").click(login);

}

window.onload=init;