export function clickContinue(DOMSelector, DOMManipulate, questions, set_Counter,showQuetions,queCounter,startTimer,startTimerLine,mutatingVariables,setOnClick) {
    // call all required DOMSelectors and equate to a variable
    const info_box = DOMSelector(document, "method", ".info_box");
    const quiz_box = DOMSelector(document, "method", ".quiz_box");
    DOMManipulate(info_box, "classList.remove", "activeInfo"); //hide info box
    DOMManipulate(quiz_box, "classList.add", "activeQuiz"); //show quiz box
    showQuetions(0, DOMSelector, DOMManipulate,setOnClick,mutatingVariables,set_Counter); //calling showQestions function
    queCounter(1, DOMSelector, DOMManipulate, questions); //passing  parameters to queCounter
    startTimer(15, DOMSelector, DOMManipulate, mutatingVariables, questions, set_Counter); //calling startTimer function
    startTimerLine(0, DOMSelector, DOMManipulate, set_Counter); //calling startTimerLine function
  }