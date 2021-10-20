export function DOMSelector(object, method, selector) {
  switch (method) {
    case "method":
      return object.querySelector(selector);
      break;
    case "methodAll":
      return object.querySelectorAll(selector);
      break;
    default:
    { let text = "failed"
      console.log(text);
    return text
    }

      
  }
}
