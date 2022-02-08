"use strict";

let userName = document.getElementById("userName");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let userAccount = document.getElementById("userAccount");
let userAddres = document.getElementById("address");
let userGmail = document.getElementById("username");

// fetching data fron api
fetch("https://6193976ed3ae6d0017da86a1.mockapi.io/api/user_profile")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let [userOne, userTwo] = data;
    console.log(userOne);
    // checking for user validation
    loginBtn.addEventListener("click", function () {
      if (
          userName.value === userOne.username &&
          password.value === userOne.password
        ) 
        {
          location.href = "./index.html";
        

        let personName= userAccount.textContent = userOne.name;
        let add= userAddres.textContent = userOne.address;
        let username=userGmail.textContent = userOne.username;

        //if user one logged-in storing his data to local storage
        localStorage.setItem('personName',JSON.stringify(personName));
        localStorage.setItem('add',JSON.stringify(add));
        localStorage.setItem('username',JSON.stringify(username));

     

      } else if (
          userName.value === userTwo.username &&
          password.value === userTwo.password
      ) 
      {
        location.href = "./index.html";
        let personName=  userAccount.textContent = userTwo.name;
        let add=  userAddres.textContent = userTwo.address;
        let username=  userGmail.textContent = userTwo.username;

      //if user two logged-in storing his data to local storage
        localStorage.setItem('personName',JSON.stringify(personName));
        localStorage.setItem('add',JSON.stringify(add));
        localStorage.setItem('username',JSON.stringify(username));
      } else {
        alert(
          "Ooopsss....! Invalid user details Please enter Valid credentials"
        );
      }
    });
  });


