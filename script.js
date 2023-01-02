const app = document.getElementById("app");

function createCard() {
  const el = document.createElement("div");
  el.setAttribute("class", "item card");
  el.setAttribute(
    "onclick",
    "console.log(navigator.clipboard.writeText(this.innerText));"
  );
  el.innerText = document.getElementById("textarea").value;
  app.appendChild(el);
}
