function displayUsers(usersArray){  
    for(let i=0; i <usersArray.length; i++) {//travel the array
        let user = (usersArray[i]); //get the user 
        row= `
                <tr>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.address}</td>
                    <td>${user.phone}</td>
                    <td>${user.payment}</td>
                    <td style="background-color:${user.color};"></td>
                </tr>  
             `;

             $("#userTable").append(row);//append the row into the table

        
    };
};

function init(){
    console.log("Listing...");
    let users = readUsers();
    displayUsers(users);
};

window.onload=init;