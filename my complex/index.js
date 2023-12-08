var elements = document.getElementsByClassName("btn");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
        var currentElement = this;
        currentElement.style.backgroundColor = "darkgreen";

        // Remove the gold color after 2000 milliseconds (2 seconds)
        setTimeout(function() {
            currentElement.style.backgroundColor = ""; // Set it to an empty string to remove the inline style
        }, 2000);
    });
}

function toggleNav() {
    var navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.style.display = (navbarLinks.style.display === "block") ? "none" : "block";
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
const element = document.getElementById("myBtn")
element.addEventListener("click", moveFunction);

function moveFunction() {
  window.location.assign("./signup.html")
};

var pass = document.getElementById("Enter");
var email = document.getElementById("Email");
var pass = document.getElementById("pass");

function register() {
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", pass.value);
    localStorage.setItem("Repeat", pass.value);
}

const next = document.getElementById("nextBtn")
next.addEventListener("click", nextFunction);

function nextFunction(){
  if ('pass === pass.value, email === email.value, repeat  === pass.value'){
    window.location.assign("./index.html")
    alert("Registration Successful");
  }
  else{
  window.location.reload
  alert(
    "Check again!"
    )
  }
}

var addMore = document.getElementById("click")
  addMore.addEventListener("click", nextPage);

  function nextPage(){
    window.location.assign("./signup.html")
    alert("Register Now!");
  }


