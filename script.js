const app = document.getElementById("app");

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
