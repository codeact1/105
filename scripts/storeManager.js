function saveUser(User){

    console.log(User);  
    let val= JSON.stringify(User);
    console.log(val);
    localStorage.setItem("user", val);

}

 function readUsers(){
     console.log(User);  
     let val= JSON.stringify(User);
     console.log(val);
     localStorage.setItem("user", val);

 }