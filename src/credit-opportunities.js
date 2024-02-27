import { handleAccordion } from "./helpers";

console.log("credit-opportunies");

const allFaqAccordions = [...document.querySelectorAll(".accordioncontainer")];

allFaqAccordions.forEach((accordion, index) => {
  const header = accordion.querySelector(`.faqheader`);
  const button = accordion.querySelector(`.accordionbutton`);
  const container = accordion;
  let open = index == 0 ? true : false;
  const initialHeight = container.clientHeight;
  const headerPadding = 4;

  handleAccordion({
    button,
    header,
    container,
    open,
    initialHeight,
    headerPadding,
  });
});
