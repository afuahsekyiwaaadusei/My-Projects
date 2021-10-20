import { questions } from "../questions.js";
//if user clicked on option
export function optionSelected(answer,DOMSelector, DOMManipulate, mutatingVariables,set_Counter) {
  
  let [que_count, , userScore] = mutatingVariables.getValues(); // getting que_count , userScore
  let userAns = DOMManipulate(answer, "textContent1"); //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const option_list = DOMSelector(document, "method", ".option_list");
  const next_btn = DOMSelector(document, "method", "footer .next_btn");
  let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
  let crossIconTag =
    '<div class="icon cross"><i class="fas fa-times"></i></div>'; // creating the new div tag  for icon
  let counter = set_Counter.getCounterID()
  let counterLine = set_Counter.getCounterLineID()
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  const allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer

    [, , userScore] = mutatingVariables.incrementScore(); //userScore += 1; //upgrading score value with 1
    DOMManipulate(answer, "classList.add", "correct"); //adding green color to correct selected option
    DOMManipulate(answer, "insertAdjacentHTML", "beforeend", tickIconTag); //adding tick icon to correct selected option
  } else {
    DOMManipulate(answer, "classList.add", "incorrect"); //adding red color to wrong selected option
    DOMManipulate(answer, "insertAdjacentHTML", "beforeend", crossIconTag); //adding cross icon to wrong selected option
    autoSelect();

    function autoSelect(i = 0) {
      if (i < allOptions) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          DOMManipulate(
            option_list.children[i],
            "setAttribute",
            "class",
            "option correct"
          ); //adding green color to matched option
          DOMManipulate(
            option_list.children[i],
            "insertAdjacentHTML",
            "beforeend",
            tickIconTag
          ); //adding tick icon to matched option
        }
        autoSelect(i + 1);
      }
    }
  }

  function disableOptions(i = 0) {
    if (i < allOptions) {
      DOMManipulate(option_list.children[i], "classList.add", "disabled"); //once user select an option then disabled all options
      disableOptions(i + 1);
    }
  }
  disableOptions();

  DOMManipulate(next_btn, "classList.add", "show"); //show the next button if user selected any option
}