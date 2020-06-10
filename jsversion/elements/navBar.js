export function makeNavBar(items) {
  let navbar = document.createElement("ul");
  navbar.className = "ul ul-navbar";
  items.forEach((element) => {
    navbar.appendChild(createListItem(element));
  });
  document.body.appendChild(navbar);
}

function createListItem(linkitems) {
  let navbarItem = document.createElement("li");
  navbarItem.className = "li li-navbar";
  let a = document.createElement("a");
  a.setAttribute("href", linkitems[0]);
  a.innerHTML = linkitems[1];

  if (linkitems[2]) {
    a.className = "active";
  }

  navbarItem.appendChild(a);
  return navbarItem;
}
