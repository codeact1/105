const KEY = "User";
function saveUser(User){
    let oldData = readUsers();// [] 
   oldData.push(User);
    let val= JSON.stringify(oldData);
    console.log(val);
    localStorage.setItem(KEY, val);//sending data to the LS

}

 function readUsers(){
     //get the values from local storage
    let data=localStorage.getItem(KEY);
    console.log(data);
    if(!data){//is not data
        return[];
    }else{//we have data
       let list =JSON.parse(data);//return the string to an obj or Array
       console.log(list);
        return list;
    }
     //is not data?

     //create the array

 }