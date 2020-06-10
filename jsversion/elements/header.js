export function makeHeader() {
  let divHeader = document.createElement("div");
  divHeader.classList.add("header");
  let header1 = document.createElement("h1");
  let line1 = document.createTextNode("Interaction Designer and Developer");
  header1.appendChild(line1);
  divHeader.appendChild(header1);
  let header2 = document.createElement("h1");
  header2.style.fontSize = "42px";
  let line2 = document.createTextNode("Björn Bergqvist");
  header2.appendChild(line2);
  divHeader.appendChild(header2);

  document.body.appendChild(divHeader);
}
