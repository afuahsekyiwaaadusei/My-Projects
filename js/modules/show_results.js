export function showResult(DOMSelector, DOMManipulate, mutatingVariables, questions) {
    // let question = Data();
    //  destructure  required mutatingVariable
    let [, , userScore] = mutatingVariables.getValues();
  
    //calll all required DOMSelectors
    const info_box = DOMSelector(document, "method", ".info_box");
    const quiz_box = DOMSelector(document, "method", ".quiz_box");
    const result_box = DOMSelector(document, "method", ".result_box");

  
    //Call DOMMAnipulate function to do required DOM manipulation
    DOMManipulate(info_box, "classList.remove", "activeInfo"); //hide info box
    DOMManipulate(quiz_box, "classList.remove", "activeQuiz"); //hide quiz box
    DOMManipulate(result_box, "classList.add", "activeResult"); //show result box
  
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
      // if user scored more than 3
      //creating a new span tag and passing the user score number and total question number
      let scoreTag =
        "<span>and congrats! 🎉, You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      DOMManipulate(scoreText, "innerHTML", scoreTag); //adding new span tag inside score_Text
    } else if (userScore > 1) {
      // if user scored more than 1
      let scoreTag =
        "<span>and nice 😎, You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      DOMManipulate(scoreText, "innerHTML", scoreTag); //setting Score
    } else {
      // if user scored less than 1
      let scoreTag =
        "<span>and sorry 😐, You got only <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      DOMManipulate(scoreText, "innerHTML", scoreTag); // setting Score
    }
  }