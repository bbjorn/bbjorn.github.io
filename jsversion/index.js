import { makeHeader } from "./elements/header.js";
import { makeNavBar } from "./elements/navBar.js";
makeHeader();

const items = [
  ["index.html", "Start", true],
  ["aboutme.html", "About Me", false],
  ["designportfolio.html", "Design Portfolio", false],
  ["codeportfolio.html", "Code Portfolio", false],
];

makeNavBar(items);
