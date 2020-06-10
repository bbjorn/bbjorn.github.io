/* 
	<ul type="ul" class="ul ul-navbar">
		<li type="li" class="li li-navbar"><a class="active" href="index.html">Start</a></li>
		<li type="li" class="li li-navbar"><a href="aboutme.html">About Me</a></li>
		<li type="li" class="li li-navbar"><a href="designportfolio.html">Design Portfolio</a></li>	
		<li type="li" class="li li-navbar"><a href="codeportfolio.html">Code Portfolio</a></li>
		<!--<li type="li" class="li li-navbar"><a href="contact.html">Contact</a></li>-->
    </ul>
 */

export function makeNavBar(items) {
  let navbar = document.createElement("ul");
  navbar.className = "ul ul-navbar";
  items.forEach((element) => {
    navbar.appendChild(createListItem(element));
  });

  //navbar.appendChild(createListItem(["index.html", "Start"]));

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
