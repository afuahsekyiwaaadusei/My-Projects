export function setOnClick(element, func, ...args) {
  let attr = args;
  element.onclick = () => {
    func(...attr);
  };
}
