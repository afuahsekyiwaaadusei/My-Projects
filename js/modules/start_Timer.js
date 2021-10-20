export function startTimer(time, DOMSelector, DOMManipulate, mutatingVariables, questions,set_Counter) {
 
    let [que_count] = mutatingVariables.getValues();
    const option_list = DOMSelector(document, "method", ".option_list");
    const timeText = DOMSelector(document, "method", ".timer .time_left_txt");
    const timeCount = DOMSelector(document, "method", ".timer .timer_sec");
    const next_btn = DOMSelector(document, "method", "footer .next_btn");
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>'; // creating the new div tag  for icon
  
    
    set_Counter.setCounter(timer);
  
  
    function timer() {
      DOMManipulate(timeCount, "textContent", time); //changing the value of timeCount with time value
      time--; //decrement the time value
      
      if (time < 9) {
        
        //if timer is less than 9
        let addZero = DOMManipulate(timeCount, "textContent1");
        DOMManipulate(timeCount, "textContent", "0" + addZero); //add a 0 before time value
      }
      if (time < 0) {
        
        //if timer is less than 0
        let counter =set_Counter.getCounterID()
        clearInterval(counter); //clear counter
        DOMManipulate(timeText, "textContent", "Time Off"); //change the time text to time off
        const allOptions = option_list.children.length; //getting all option items
        let correcAns = questions[que_count].answer; //getting correct answer from array
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
            DOMManipulate(option_list.children[i], "classList.add", "disabled"); //once  an option is auto selected  disable all  options
  
            autoSelect(i + 1);
          }
        }
        
  
        DOMManipulate(next_btn, "classList.add", "show"); //show the next button if user selected any option
      }
    }
  }