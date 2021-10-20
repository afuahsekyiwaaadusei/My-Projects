export function restart(DOMSelector, DOMManipulate, mutatingVariables, questions, set_Counter,setOnClick,showQuetions,queCounter,startTimer,startTimerLine) {
    //call all required DOM Selectors and equate to a value
    const quiz_box = DOMSelector(document, "method", ".quiz_box");
    const result_box = DOMSelector(document, "method", ".result_box");
    const timeText = DOMSelector(document, "method", ".timer .time_left_txt");
  
    // declaring variables
    let [que_count, que_numb] = mutatingVariables.restartValues(); // call "mutatingVariables.restartValues()" to reset variables
    let counter = set_Counter.getCounterID()
    let counterLine = set_Counter.getCounterLineID()
    const next_btn = DOMSelector(document, "method", "footer .next_btn");
    const timeValue = 15;
    const widthValue = 0;
  
    DOMManipulate(quiz_box, "classList.add", "activeQuiz"); //show quiz box
    DOMManipulate(result_box, "classList.remove", "activeResult"); //hide result box
    showQuetions(que_count, DOMSelector, DOMManipulate,setOnClick,mutatingVariables,set_Counter); //calling showQestions function
    queCounter(que_numb, DOMSelector, DOMManipulate,questions); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue, DOMSelector, DOMManipulate, mutatingVariables, questions,set_Counter); //calling startTimer function
    startTimerLine(widthValue, DOMSelector, DOMManipulate,set_Counter); //calling startTimerLine function
    DOMManipulate(timeText, "textContent", "Time Left"); //change the text of timeText to Time Left
    DOMManipulate(next_btn, "classList.remove", "show"); //hide the next button
  }