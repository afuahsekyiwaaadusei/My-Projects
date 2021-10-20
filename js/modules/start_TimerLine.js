export function startTimerLine(time, DOMSelector, DOMManipulate,set_Counter) {
    const time_line = DOMSelector(document, "method", "header .time_line");
  
    set_Counter.setCounterLine(timer)
    function timer() {
      time += 1; //upgrading time value with 1
      DOMManipulate(time_line, "style.width", time + "px"); //increasing width of time_line with px by time value
      if (time > 549) {
        //if time value is greater than 549
        let counterLine =set_Counter.getCounterLineID()
        clearInterval(counterLine); //clear counterLine
      }
    }
  }