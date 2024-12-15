let loginBtn = document.querySelector("#loginBtn");
let userLoginEmail = document.querySelector("#emailInput");
let userLoginPasswd = document.querySelector("#passInput");
let warnMsg = document.querySelector("#warnMsg");

let usersList = JSON.parse(localStorage.getItem("SmartLoginUsersList")) || null;



function isLoginFormEmpty() {
    return !userLoginEmail.value && !userLoginPasswd.value;
}

loginBtn.addEventListener("click", function () {
    var isFormEmpty = isLoginFormEmpty();

    if (isFormEmpty) {
      warnMsg.classList.remove("d-none");
      warnMsg.textContent = "All inputs are required";
    } 
    else{
        warnMsg.classList.add("d-none");
        if(usersList !==null){
            let userFound = false;
            for(let i = 0; i < usersList.length; i++){
                if (
                    usersList[i].email.toLowerCase() === userLoginEmail.value.toLowerCase() &&
                    usersList[i].password === userLoginPasswd.value
                  ){
                    window.location.href = "home.html";
                    sessionStorage.setItem(
                        "loggedUser",
                        JSON.stringify({
                          email: usersList[i].email,
                          name: usersList[i].name,
                        })
                    )
                    userFound = true;
                     break;
                  }
            }
            if(!userFound) {
                warnMsg.textContent = "No user found with this email";
                warnMsg.classList.remove("d-none");
            }
        }
        else{
            warnMsg.textContent = "No user data available";
            warnMsg.classList.remove("d-none");
        }
    }
})









