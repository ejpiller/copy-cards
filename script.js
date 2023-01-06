const app = document.getElementById("app");
const changeTheme = document.querySelector(".change-theme");
const body = document.querySelector("body");
const textArea = document.querySelector("textarea");
const darkModeBtn = document.querySelector(".dark-theme");
const lightModeBtn = document.querySelector(".light-theme");
const cardBtn = document.querySelector("button");
const h1 = document.querySelector("h1");
const darkHelpIcon = document.querySelector(".dark-help");
const lightHelpIcon = document.querySelector(".light-help");


let cards = [];


function createCard() {
  let input = document.getElementById("textarea").value;
  if (input.trim() == "") {
    console.log("You must enter text to create a card.");
  } else {
    const el = document.createElement("div");
    el.innerText = document.getElementById("textarea").value.trim();
    el.setAttribute("class", "item card");
    el.onclick = copyText;
    el.ondblclick = deleteCard;
    app.appendChild(el);
    document.getElementById("textarea").value = "";
    cards.push(el);
    if(body.classList.contains("dark-mode")){
      el.classList.add("dark-card");
    }else{
      el.classList.remove("dark-card");
    }
  }
}

function copyText() {
  navigator.clipboard.writeText(this.innerText);
}

function deleteCard() {
  const response = confirm("Delete this card?");
  if (response == true) {
    this.remove();
  } else {
    console.log("Deletion canceled.");
  }
}

function displayElement(fCondition, sCondition){
    darkModeBtn.style.display = fCondition;
    lightModeBtn.style.display = sCondition;
    darkHelpIcon.style.display = fCondition;
    lightHelpIcon.style.display = sCondition;
}

changeTheme.addEventListener("click", (e) => {

  e.preventDefault();

  body.classList.toggle("dark-mode");
  textArea.classList.toggle("dark-card");
  cardBtn.classList.toggle("dark-button");
  h1.classList.toggle("dark-title");

  if(e.target.classList.contains("dark-theme")){
    displayElement("none", "inline-block");
      cards.forEach((e) => {
    e.classList.add("dark-card");
  })
  } else {
    displayElement("inline-block", "none");
      cards.forEach((e) => {
    e.classList.remove("dark-card");
  })
  }
})
