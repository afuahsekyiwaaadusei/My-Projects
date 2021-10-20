import { questions } from "../questions.js";
import { optionSelected } from "./option_selected.js"
// getting questions and options from array
export function showQuetions(index, DOMSelector, DOMManipulate,setOnClick,mutatingVariables,set_Counter) {
  // let question = questions;
  const que_text = DOMSelector(document, "method", ".que_text");
  const option_list = DOMSelector(document, "method", ".option_list");
  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = "<span>" +  questions[index].numb + ". " + questions[index].question + "</span>";
  let option_tag = `<div class="option"><span>${questions[index].options[0]}</span></div><div class="option"><span>${questions[index].options[1]}</span></div><div class="option"><span>${questions[index].options[2]}</span></div><div class="option"><span>${questions[index].options[3]}</span></div>`;
  // console.log(que_text)
  DOMManipulate(que_text, "innerHTML", que_tag); //adding new span tag inside que_tag
  DOMManipulate(option_list, "innerHTML", option_tag); //adding new div tag inside option_tag
  const option = DOMSelector(option_list, "methodAll", ".option");
  setOnclickAttribute();
 

  
// set onclick attribute to all available options
  function setOnclickAttribute(i = 0) {
    if (i < option.length) {
     setOnClick(option[i],optionSelected,option[i],DOMSelector, DOMManipulate, mutatingVariables,set_Counter)
     
     
     setOnclickAttribute(i + 1);
    }
  }
}



