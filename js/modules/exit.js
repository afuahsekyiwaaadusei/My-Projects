export function exit(DOMSelector, DOMManipulate) {
    const info_box = DOMSelector(document, "method", ".info_box");
    DOMManipulate(info_box, "classList.remove", "activeInfo"); //hide info box
  }