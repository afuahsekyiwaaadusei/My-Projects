export function next(DOMSelector, DOMManipulate, mutatingVariables, questions,setOnClick ,set_Counter,showQuetions,queCounter,startTimer,startTimerLine,showResult) {
    let [que_count, que_numb,userScore] = mutatingVariables.getValues();
    const timeText = DOMSelector(document, "method", ".timer .time_left_txt");
    const next_btn = DOMSelector(document, "method", "footer .next_btn");
    const timeValue = 15;
    const widthValue = 0;
    // let question = Data();
    let counter = set_Counter.getCounterID()
    let counterLine = set_Counter.getCounterLineID()
    if (que_count < questions.length - 1) {
      //if question count is less than total question length
      [que_count, que_numb, userScore] = mutatingVariables.incrementQue(); //increment the que_count value and increment the que_numb value
      showQuetions(que_count, DOMSelector, DOMManipulate,setOnClick,mutatingVariables,set_Counter); //calling showQestions function
      queCounter(que_numb, DOMSelector, DOMManipulate, questions); //passing que_numb value to queCounter
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      startTimer(timeValue, DOMSelector, DOMManipulate, mutatingVariables, questions,set_Counter); //calling startTimer function
      startTimerLine(widthValue, DOMSelector, DOMManipulate, set_Counter); //calling startTimerLine function
      DOMManipulate(timeText, "textContent", "Time Left"); //change the text of timeText to Time Left
      DOMManipulate(next_btn, "classList.remove", "show"); //hide the next button
    } else {
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(DOMSelector, DOMManipulate, mutatingVariables, questions); //calling showResult function
    }
  }