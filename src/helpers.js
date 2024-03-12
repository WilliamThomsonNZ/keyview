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

export function handleErrorStates(value, formInputContainer) {
  if (value === "") {
    formInputContainer.querySelector(".errormessage").style.display = "block";
    return false;
  } else {
    formInputContainer.querySelector(".errormessage").style.display = "none";
    return true;
  }
}

export function handleEmailErrorStates(value, formInputContainer) {
  if (value === "" || !/\S+@\S+\.\S+/.test(value)) {
    formInputContainer.querySelector(".errormessage").style.display = "block";
    return false;
  } else {
    formInputContainer.querySelector(".errormessage").style.display = "none";
    return true;
  }
}

export function clearInputs(...inputs) {
  inputs.forEach((input) => {
    input.value = "";
  });
}

export function handleFundDownload() {}
