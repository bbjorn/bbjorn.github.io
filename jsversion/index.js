import { makeHeader } from "./elements/header.js";
import { makeNavBar } from "./elements/navBar.js";
import { makeStartPage } from "./elements/startPage.js";
import { makeFooter } from "./elements/footer.js";

// Create the header
makeHeader();

const items = [
  ["../index.html", "Start", true],
  ["../aboutme.html", "About Me", false],
  ["../designportfolio.html", "Design Portfolio", false],
  ["../codeportfolio.html", "Code Portfolio", false],
];

// Add the navbar
makeNavBar(items);

// Add the page
makeStartPage();

// Add the footer
makeFooter();
