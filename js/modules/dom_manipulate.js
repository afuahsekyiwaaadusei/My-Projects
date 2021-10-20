export function DOMManipulate(element, action, value1 = "", value2 = "") {
    switch (action) {
      case "classList.add":
        element.classList.add(value1);
  
        break;
      case "classList.remove":
        element.classList.remove(value1);
        break;
      case "textContent":
        element.textContent = value1;
        break;
      case "textContent":
        element.textContent = value1;
        break;
      case "textContent1":
        return element.textContent;
        break;
      case "innerHTML":
        element.innerHTML = value1;
  
        break;
      case "setAttribute":
        element.setAttribute(value1, value2);
        break;
      case "insertAdjacentHTML":
        element.insertAdjacentHTML(value1, value2);
        break;
      case "style.width":
        element.style.width = value1;
        break;
      case "location":
        element.location.reload();

      default:
        console.log("failed");
        break;
    }
  }