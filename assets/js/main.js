// Slider of Feedbacks
var counter = 1;
var x = document.getElementsByClassName("feedback-item").length;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > x) {
    counter = 1;
  }
}, 15000);

// Slider of Courses
var counterCourses = 2;
var numCourses = document.getElementsByClassName("course-block");

setInterval(function () {
  document.getElementById("course-radio" + counterCourses).checked = true;
  counterCourses++;

  if (counterCourses > 2) {
    counterCourses = 1;
  }
}, 20000);

//Slider for blog
var counterBlog = 2;

setInterval(function () {
  document.getElementById("blog-radio" + counterBlog).checked = true;
  counterBlog++;

  if (counterBlog > 3) {
    counterBlog = 1;
  }
}, 20000);

// Javascript for form
function openForm() {
  document.getElementById("myForm").style.visibility = "visible";
  document.getElementById("myForm").style.opacity = "1";
  document.body.style.overflow = "hidden";
}

function getScrollbarHeight(event) {
  var formElement = document.getElementById("myForm");
  var videoElement = document.getElementById("popup-video");
  formElement.style.top = this.scrollY + "px";
  videoElement.style.top = this.scrollY + "px";
}

function closeForm() {
  var confirm1;
  confirm1 = confirm("Do you want to close the registration form?");

  if (confirm1) {
    document.getElementById("myForm").style.visibility = "hidden";
    document.getElementById("myForm").style.opacity = "0";
    document.body.style.overflow = "auto";
  }
}

function myFunction(event) {
  var element = event.target;
  var x = document.getElementsByClassName("form-center")[0];

  if (element === x) {
    closeForm();
  }
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("fa-eye");
});

const re_togglePassword = document.querySelector("#reTogglePassword");
const re_password = document.querySelector("#re-password");

re_togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    re_password.getAttribute("type") === "password" ? "text" : "password";
  re_password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("fa-eye");
});

// Popup Video
function openVideo() {
  var element = document.querySelector("#popup-video");
  element.style.visibility = "visible";
  element.style.opacity = "1";
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  var element = document.querySelector("#popup-video");
  element.style.visibility = "hidden";
  element.style.opacity = "0";
  document.body.style.overflow = "auto";
}
