export const set_Counter = (() => {
    let counter
    let counterLine
   
    return{
      setCounter(timer){
        counter = setInterval(timer,1000);
      },
      setCounterLine(timer){
        counterLine = setInterval(timer,29);
      },
      getCounterID() {
        return counter;
      },
      getCounterLineID() {
        return counterLine;
      }
    }
  })();