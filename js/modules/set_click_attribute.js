export function setClickAttribute(element, func, ...args) {
  let attr = args;
  element.onclick = () => {
    func(...attr);
  };
}
