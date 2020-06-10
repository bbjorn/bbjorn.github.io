export function makeStartPage() {
  // Create a list with only one item
  let startPageUl = document.createElement("ul");
  startPageUl.className = "ul liststyle-ul";
  let startPageLi = document.createElement("li");
  startPageLi.className = "li liststyle-li";

  // Create a grid
  startPageLi.appendChild(createGrid());
  startPageUl.appendChild(startPageLi);
  document.body.appendChild(startPageUl);
}

function createGrid() {
  let grid = document.createElement("div");
  grid.className = "pres-grid-container";

  // The top left quarter of the grid
  let gridTopLeft = document.createElement("div");
  gridTopLeft.className = "preslefttop";
  gridTopLeft.appendChild(createHeader("Björn Bergqvist", "font-size: 44px"));
  gridTopLeft.appendChild(createHeader("Interaction Design Graduate"));
  grid.appendChild(gridTopLeft);

  // The bottom left quarter of the grid
  let gridBottomLeft = document.createElement("div");
  gridBottomLeft.className = "presleftbottom";
  let gridBottomLeftDiv = document.createElement("div");
  gridBottomLeftDiv.appendChild(createHeader("Portfolio", false));
  gridBottomLeftDiv.appendChild(createHeader("Selected Examples", false));
  gridBottomLeft.appendChild(gridBottomLeftDiv);
  grid.appendChild(gridBottomLeft);

  // The right half of the grid
  let gridRight = document.createElement("div");
  gridRight.className = "presright";
  let image = document.createElement("IMG");
  image.src = "../img/mesquare.jpg";
  image.alt = "A portrait of me";
  image.style =
    "border-radius:50%; width:100%; float: right; margin-left:15px;";
  gridRight.appendChild(image);
  grid.appendChild(gridRight);

  return grid;
}

function createHeader(text, options) {
  // Create a h3 header
  let header = document.createElement("h3");
  if (options) header.style = options;
  let line = document.createTextNode(text);
  header.appendChild(line);
  return header;
}
