/* 	<footer>
		<h2>Contact</h2>
		<ul type="ul" class="ul liststyle-ul">
				<a href="https://www.linkedin.com/in/bjrn-bergquist/"><img src="img/contacticons/LI-In-Bug.png" style="height:18pt"> LinkedIn </a></br>
				<a href="mailto:bjrn.bergqvist@gmail.com"><img src="img/contacticons/email.png" style="height:18pt"> Email: bjrn.bergqvist@gmail.com </a></br>
				<p><img src="img/contacticons/phone.png" style="height:18pt"> (+46) 073-3809927</p></br>
				<a href="http://www.freepik.com"><p><small><em>Icons Designed by Freepik</em></small></p></a></br>
		</ul>
    </footer>*/

export function makeFooter() {
  let footer = document.createElement("footer");
  let heading = document.createElement("h2");
  const headingText = document.createTextNode("Contact");
  heading.appendChild(headingText);
  footer.appendChild(heading);

  let list = document.createElement("ul");
  list.className = "ul liststyle-ul";
  list.appendChild(
    createListItem(
      "a",
      " LinkedIn",
      "../img/contacticons/LI-In-Bug.png",
      "height:18pt",
      "https://www.linkedin.com/in/bjrn-bergquist/"
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    createListItem(
      "a",
      " Email: bjrn.bergqvist@gmail.com",
      "../img/contacticons/email.png",
      "height:18pt",
      "mailto:bjrn.bergqvist@gmail.com"
    )
  );
  list.appendChild(document.createElement("br"));
  list.appendChild(
    createListItem(
      "p",
      " (+46) 073-3809927",
      "../img/contacticons/phone.png",
      "height:18pt"
    )
  );
  list.appendChild(document.createElement("br"));

  let copyright = document.createElement("a");
  copyright.setAttribute("href", "http://www.freepik.com");
  let copyrightParagraph = document.createElement("p");
  let copyrightSmall = document.createElement("small");
  let copyrightItalic = document.createElement("em");
  const copyrightText = document.createTextNode("Icons Designed by Freepik");
  copyrightItalic.appendChild(copyrightText);
  copyrightSmall.appendChild(copyrightItalic);
  copyrightParagraph.appendChild(copyrightSmall);
  copyright.appendChild(copyrightParagraph);
  list.appendChild(copyright);

  footer.appendChild(list);
  document.body.appendChild(footer);
}

function createListItem(type, text, image, imageStyle, link) {
  let listItem = document.createElement(type);
  if (type === "a") {
    listItem.setAttribute("href", link);
  }

  let listImage = document.createElement("IMG");
  listImage.src = image;
  listImage.style = imageStyle;
  listItem.appendChild(listImage);

  listItem.appendChild(document.createTextNode(text));

  return listItem;
}
