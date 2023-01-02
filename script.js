const app = document.getElementById("app");

function createCard() {
  let input = document.getElementById("textarea").value;
  console.log(input);
  if (input == "") {
    console.log("You must enter text to create a card.");
  } else {
    const el = document.createElement("div");
    el.setAttribute("class", "item card");
    el.setAttribute(
      "onclick",
      "console.log(navigator.clipboard.writeText(this.innerText));"
    );
    el.innerText = document.getElementById("textarea").value;
    app.appendChild(el);
    document.getElementById("textarea").value = "";
  }
}
