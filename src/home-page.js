import { handleAccordion } from "./helpers.js";

const capitalButton = document.getElementById("capital-button");
const capitalHeader = document.getElementById("capital-header");
const capitalContainer = document.getElementById("capital-container");
let capitalOpen = open;
const capitalInitialHeight = capitalContainer.clientHeight;

handleAccordion({
  button: capitalButton,
  header: capitalHeader,
  container: capitalContainer,
  open: capitalOpen,
  initialHeight: capitalInitialHeight,
  headerPadding: 0,
});

const attractiveButton = document.getElementById("attractive-button");
const attractiveHeader = document.getElementById("attractive-header");
const attractiveContainer = document.getElementById("attractive-container");
let attractiveOpen = false;
const attractiveInitialHeight = attractiveContainer.clientHeight;

handleAccordion({
  button: attractiveButton,
  header: attractiveHeader,
  container: attractiveContainer,
  open: attractiveOpen,
  initialHeight: attractiveInitialHeight,
  headerPadding: 0,
});

const alignmentButton = document.getElementById("alignment-button");
const alignmentHeader = document.getElementById("alignment-header");
const alignmentContainer = document.getElementById("alignment-container");
let alignmentOpen = false;
const alignmentInitialHeight = alignmentContainer.clientHeight;

handleAccordion({
  button: alignmentButton,
  header: alignmentHeader,
  container: alignmentContainer,
  open: alignmentOpen,
  initialHeight: alignmentInitialHeight,
  headerPadding: 0,
});

const marginButton = document.getElementById("margin-button");
const marginHeader = document.getElementById("margin-header");
const marginContainer = document.getElementById("margin-container");
let marginOpen = false;
const marginInitialHeight = marginContainer.clientHeight;

handleAccordion({
  button: marginButton,
  header: marginHeader,
  container: marginContainer,
  open: marginOpen,
  initialHeight: marginInitialHeight,
  headerPadding: 0,
});
