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
    app.appendChild(el);
    document.getElementById("textarea").value = "";
  }
}

function copyText() {
  navigator.clipboard.writeText(this.innerText);
}
