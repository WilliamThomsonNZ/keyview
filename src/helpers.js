export function handleAccordion({
  button,
  header,
  container,
  open,
  initialHeight,
  headerPadding,
}) {
  if (open) {
    container.style.height = initialHeight + "px";
    button.querySelector(".linelower").style.transform =
      "rotate(0deg) translateY(-1px)";
  } else {
    container.style.height = header.clientHeight + headerPadding + "px";

    button.querySelector(".linelower").style.transform =
      "rotate(90deg) translateY(0px)";
  }
  button.addEventListener("click", () => {
    if (open) {
      container.style.height = header.clientHeight + headerPadding + "px";
      button.querySelector(".linelower").style.transform =
        "rotate(90deg) translateY(0px)";
      open = false;
    } else {
      container.style.height = initialHeight + "px";
      button.querySelector(".linelower").style.transform =
        "rotate(0deg) translateY(-1px)";
      open = true;
    }
  });
}
