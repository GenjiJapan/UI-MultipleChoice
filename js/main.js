var a = document.querySelector(".container__quiz");
var b = document.querySelector(".container__start");
var c = document.querySelector(".container__lobby");
var d = document.querySelector(".container__rank");
const CformLog = document.querySelector(".section");
const formLog = document.querySelector(".login-form");
const btnLog = document.querySelector(".login-form-submit");
const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

btnLog.addEventListener("click", (e) => {
  e.preventDefault();
  const username = formLog.username.value;
  const password = formLog.password.value;
  if (username === "admin" && password === "admin") {
    alert("Great !!!");
    formLog.style.display = "none";
    CformLog.style.display = "none";
    c.style.display = "block";
  } else {
    alert("sikeee !! Its wrong number");
  }
});

// Type & show / hide Toggle
function showHidePass() {
  if (password.value.length > 0) {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
}

// show hide password
function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    toggle.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    toggle.classList.remove("hide");
  }
}

function toggleForm() {
  var container = document.querySelector(".container__login");
  container.classList.toggle("active");
}

function Form() {
  var container = document.querySelector(".container__login");
  container.classList.toggle("activate");
}
// Type & change Color
function changeColor() {
  var submit = document.getElementById("submit");
  var color = document.getElementById("text-type");
  if (color.value.length > 0) {
    submit.style.color = "red";
  } else {
    submit.style.color = "grey";
  }
}

// transform div

function intoStart() {
  if (b.style.display === "none") {
    b.style.display = "block";
    c.style.display = "none";
  }
}

// transform div & active clock
const timeLeftDisplay = document.querySelector("#time-left");
const startBtn = document.querySelector("#start-button");
let timeLeft = 0;

function intoQuiz() {
  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
  }
  setInterval(function () {
    d.style.display = "none";
    if (timeLeft >= 60) {
      d.style.display = "block";
      a.style.display = "none";
      clearInterval((timeLeft = 60));
    }

    // setTimeout(function(){
    //     if(c.style.display === "none"){
    //     c.style.display = "block";
    //     d.style.display = "none";
    //   }

    // }, 6000);
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft += 1;
  }, 1000);

  startBtn.addEventListener("click", intoQuiz);
}

// transform tab create-join & MODAL
const x = document.getElementById("join");
const visibility = document.querySelector(".btn");
function hidden() {
  visibility.style.display = "none";
  openModal.style.display = "none";
  modalOverlay.style.display = "none";
}

const modalOverlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector(".modal-btn");
const closeModalBtn = document.querySelector(".close-btn");
const openModal = document.querySelector(".modal-container");
const form = document.querySelector("form");
openModalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-overlay");
  openModal.classList.add("open-modal");
});

closeModalBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-overlay");
  openModal.classList.remove("open-modal");
});

window.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("open-overlay");
    openModal.classList.remove("open-modal");
  }
});

// toggle night/light mode
const body = document.querySelector("body");
document.querySelector(".toggle").onclick = function () {
  body.classList.toggle("light");
};

// MODAL-RANK
document.getElementById("btn-modal").addEventListener("click", function () {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("modal").classList.add("is-visible");
});
document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal").classList.remove("is-visible");
});
document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("is-visible");
  document.getElementById("overlay").classList.remove("is-visible");
});
