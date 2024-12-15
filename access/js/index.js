// get user name from session storage
var welcomeMsg = document.querySelector(".message");
var logOutBtn = document.querySelector("#logout");
var bodyHtml = document.getElementsByTagName("body")[0];




var loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")) || null;



function redirectToLoginIfNotLoggedIn() {
    if (!loggedUser) {
      if (window.location.pathname == "home.html") {
        window.location.href = "/pages/404.html";
      }
    }
  }
  
  redirectToLoginIfNotLoggedIn();
  
  if (loggedUser) {
    welcomeMsg.textContent = `Hello ${loggedUser.name}`;
  
    logOutBtn.addEventListener("click", function () {
      console.log("test");
      
      sessionStorage.removeItem("loggedUser");
      window.location.href = "index.html";
    });
  }
  