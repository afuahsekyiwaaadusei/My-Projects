export function DOMSelector(object, method, selector) {
  switch (method) {
    case "method":
      return object.querySelector(selector);
      break;
    case "methodAll":
      return object.querySelectorAll(selector);
      break;
    default:
      console.log("failed");
  }
}
