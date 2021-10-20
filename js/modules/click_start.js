export function clickstart(DOMSelector, DOMManipulate) {
    const info_box = DOMSelector(document, "method", ".info_box");
    DOMManipulate(info_box, "classList.add", "activeInfo");
  }