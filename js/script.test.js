import { DOMSelector } from "./modules/dom_selector.js";
import { DOMManipulate } from "./modules/dom_manipulate.js";
import { mutatingVariables } from "./modules/mutating_variables.js";
import { setOnClick} from "./modules/set_click_attribute.js";
import { questions } from "./questions.js";
import { showQuetions } from "./modules/showQuestions.js"
import { set_Counter } from "./modules/set_Counter.js";
import { showResult }  from "./modules/show_results.js"
import { startTimer } from "./modules/start_Timer.js";
import { startTimerLine } from "./modules/start_TimerLine.js";
import { queCounter } from "./modules/que_Coounter.js";
import { clickstart } from "./modules/click_start.js";
import { exit } from "./modules/exit.js";
import { clickContinue } from "./modules/click_continue.js";
import { restart } from "./modules/restart.js";
import { next } from "./modules/next.js";



jest.useFakeTimers()
jest.spyOn(global, 'setInterval');
jest.spyOn(global, 'clearInterval');

describe("Test for individual functions", () => {

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="start_btn"><button>Start Quiz</button></div>

    
    <div class="info_box">
      <div class="info-title"><span>Some Rules of this Quiz</span></div>
      <div class="info-list">
        <div class="info">
          1. You will have only <span>15 seconds</span> per each question.
        </div>
        <div class="info">
          2. Once you select your answer, it can't be undone.
        </div>
        <div class="info">
          3. You can't select any option once time goes off.
        </div>
        <div class="info">
          4. You can't exit from the Quiz while you're playing.
        </div>
        <div class="info">
          5. You'll get points on the basis of your correct answers.
        </div>
      </div>
      <div class="buttons">
        <button class="quit">Exit Quiz</button>
        <button class="restart">Continue</button>
      </div>
    </div>

  
    <div class="quiz_box">
      <header>
        <div class="title">Awesome Quiz Application</div>
        <div class="timer">
          <div class="time_left_txt">Time Left</div>
          <div class="timer_sec">15</div>
        </div>
        <div class="time_line"></div>
      </header>
      <section>
        <div class="que_text">
         
        </div>
        <div class="option_list">
         
        </div>
      </section>

      
      <footer>
        <div class="total_que">
         
        </div>
        <button class="next_btn">Next Que</button>
      </footer>
    </div>

   
    <div class="result_box">
      <div class="icon">
        <i class="fas fa-crown"></i>
      </div>
      <div class="complete_text">You've completed the Quiz!</div>
      <div class="score_text">
        
      </div>
      <div class="buttons">
        <button class="restart">Replay Quiz</button>
        <button class="quit">Quit Quiz</button>
      </div>
    </div>
  </body>`
  require("./script.js")
 // jest.useFakeTimers();
 //jest.useRealTimers()
  
  
  });

describe('DOM selections', () => {
  it("DOMSelector should return the required DOM element", () => {
    const result = document.querySelector(".start_btn button");
    expect(DOMSelector(document, "method", ".start_btn button")).toBe(result);
  });
  
  it('DOMSelector should return all the DOM elements with this classname', () => {
    const result = document.querySelectorAll(".start_btn button");
    expect(DOMSelector(document, "methodAll", ".start_btn button")).toEqual(result)
  });
  it('DOMSelector should return fail', () => {
    expect(DOMSelector()).toEqual("failed")
  });

 });



describe('DOM manipulations', () =>{
  it('A new class is added to the div tag', () => {
    let info_box = document.querySelector(".info_box");

      DOMManipulate(info_box, "classList.add", "Info");
 

    expect(document.getElementsByClassName("Info").length).toEqual(1);
  });

 
it('The class "Info" should be removed from the div tag', () => {
   let info_box = document.querySelector('.info_box');
   DOMManipulate(info_box,"classList.remove", "Info");
   expect(document.getElementsByClassName("Info").length).toEqual(0);

});
it('The textContent attribute of the div tag should be set to  "Info"', () => {
    let button = document.querySelector(".start_btn button");
   DOMManipulate(button,"textContent", "Info");
   let text = button.textContent;
   expect(text).toMatch(/Info/);

});
it('The text variable should be set to the textContent of info_box', () => {
    let button = document.querySelector(".start_btn button");
    let text = DOMManipulate(button,"textContent1");
    expect(text).toMatch("Start Quiz")

});
it('The innerHTML of info_box should be set to "innerHTML"', () => {
   let info_box = document.querySelector('.info_box');
   DOMManipulate(info_box,"innerHTML", "innerHTML");
   let text = info_box.innerHTML;
   expect(text).toMatch(/innerHTML/);

});

it('A new <p></p> will be added after info_box', () => {
   let info_box = document.querySelector('.info_box');
   DOMManipulate(info_box,"insertAdjacentHTML", "afterend", "<p id='new_tag'>My new paragraph</p>");
   let text = document.getElementById("new_tag")
   
   expect(text.innerHTML).toBe("My new paragraph");

});
it('The width of button should be set to 300px', () => {
  let  info_box = document.querySelector(".info_box");
   DOMManipulate(info_box, "style.width", "300px");
   let text = info_box.style.width
   expect(text).toBe("300px");

});
it('Class attribute of Info_box should be set to "tryClass"', () => {
  let info_box = document.querySelector('.info_box');
   DOMManipulate(info_box,"setAttribute", "class", "tryClass")
  expect(document.getElementsByClassName("tryClass").length).toEqual(1);

 });

 });
 
describe('When mutatingVariables is called', () =>{
    it('When "getValues()" is called the values of  "que_count"  ,"que_numb" and "userScore" is returned ', () => {
      const Values = mutatingVariables.getValues();
      let que_count = 0;
      let que_numb = 1;
      let userScore = 0;
      const arrReturned = [que_count, que_numb, userScore];
  
      expect(Values).toEqual(arrReturned);
    });
  
    it('When the "incrementQue()" is called "que_count" and "que_numb" is incremented ', () => {
      const [startQue_Count, startQue_Numb,startUserScore] = mutatingVariables.getValues();
      const [que_count, que_numb] = mutatingVariables.incrementQue();
      const [, ,userScore]  = mutatingVariables.incrementScore()
  
      expect(que_count).toBe(startQue_Count + 1);
      expect(que_numb).toBe(startQue_Numb + 1);
      expect(userScore).toBe(startUserScore + 1);
    });
  
    it('When "restartValues()" is called the values of  "que_count" ,"que_numb" and "userScore" is reset  ', () => {
      const Values = mutatingVariables.restartValues();
      let que_count = 0;
      let que_numb = 1;
      let userScore = 0;
      const arrReturned = [que_count, que_numb, userScore];
  
      expect(Values).toEqual(arrReturned);
    });
  });

it("when the setOnClick function is called the onclick atribute of an element is set to a function", () => {
    const button = document.querySelector(".restart");
    setOnClick(
      button,
      DOMManipulate,
      button,
      "classList.add",
      "attributeAdded"
    );
    button.click();
    expect(document.getElementsByClassName("attributeAdded").length).toEqual(1);
  });

it('All Questions and options are showing', () => {
  for(let index = 0; index < 5; index++){
      showQuetions(index,DOMSelector,DOMManipulate,setOnClick,mutatingVariables,set_Counter)
      let que = document.querySelector(".que_text").innerHTML
      let optList = document.querySelector(".option_list");
      let opt = optList.querySelectorAll(".option")
      let text1 = opt[0].innerHTML
      let text2 = opt[1].innerHTML
      let text3 = opt[2].innerHTML
      let text4 = opt[3].innerHTML
      expect(que).not.toBeNull();
      expect(text1).not.toBeNull();
      expect(text2).not.toBeNull();
      expect(text3).not.toBeNull();
      expect(text4).not.toBeNull();
    }
    

 

});

describe('Testing showResult function', () =>{
  it('Infobox,quizbox should be hidden, result box should show', () =>{
   
   const  info_box = document.querySelector(".info_box")
    info_box.classList.add("activeInfo")
    
    let quiz_box = document.querySelector(".quiz_box")
    quiz_box.classList.add("activeQuiz")
    let result = document.querySelector(".result_box")
    showResult(DOMSelector, DOMManipulate, mutatingVariables, questions);

    expect(info_box.classList[1]).toBeUndefined();
    expect(quiz_box.classList[1]).toBeUndefined();
    expect(result.classList[1]).toBe("activeResult")
  
  });
  it('Score is shown', () => {
    let result_box = document.querySelector(".result_box")
    const scoreText = result_box.querySelector(".score_text")

    mutatingVariables.incrementScore();
    mutatingVariables.incrementScore();
    showResult(DOMSelector, DOMManipulate, mutatingVariables, questions)
    expect(scoreText.innerHTML).toBe(`<span>and nice 😎, You got <p>2</p> out of <p>5</p></span>`)

    mutatingVariables.restartValues();
    mutatingVariables.incrementScore();
    mutatingVariables.incrementScore();
    mutatingVariables.incrementScore();
    mutatingVariables.incrementScore();
    showResult(DOMSelector, DOMManipulate, mutatingVariables, questions)
    expect(scoreText.innerHTML).toBe(`<span>and congrats! 🎉, You got <p>4</p> out of <p>5</p></span>`)

    mutatingVariables.restartValues();
    showResult(DOMSelector, DOMManipulate, mutatingVariables, questions)
    expect(scoreText.innerHTML).toBe(`<span>and sorry 😐, You got only <p>0</p> out of <p>5</p></span>`)

  });


});

it('Testing set_Counter function', () =>{
  const mockTimer = jest.fn();
  set_Counter.setCounter(mockTimer);

  const mockTimer1 = jest.fn();
  set_Counter.setCounterLine(mockTimer1);


  jest.runOnlyPendingTimers();


  expect(setInterval).toHaveBeenCalledWith(mockTimer, 1000);
  expect(mockTimer).toBeCalled();
  expect(mockTimer).toHaveBeenCalledTimes(1);
  
  expect(setInterval).toHaveBeenLastCalledWith(mockTimer1, 29);
  expect(mockTimer1).toBeCalled();
  expect(setInterval).toHaveBeenCalledTimes(2);
  
  
  let counter = set_Counter.getCounterID();
  let counterLine = set_Counter.getCounterLineID()
  expect(counter).not.toBeNull();
  expect(counterLine).not.toBeNull();
  
});

it('Testing startTimer', () => {
 const timeCount = document.querySelector(".timer .timer_sec");

  startTimer(9, DOMSelector, DOMManipulate, mutatingVariables, questions,set_Counter)
  jest.runOnlyPendingTimers();

  expect(setInterval).toHaveBeenCalledTimes(3);
  expect(timeCount.textContent).toBe("09");
  
  startTimer(0, DOMSelector, DOMManipulate, mutatingVariables, questions,set_Counter)
  jest.runOnlyPendingTimers();
  expect(timeCount.textContent).toBe("00");
  
});

it('Testing startTimerLine', () =>{
  const time_line = document.querySelector("header .time_line");


  startTimerLine(550, DOMSelector, DOMManipulate,set_Counter);
  jest.runOnlyPendingTimers();

  expect(setInterval).toHaveBeenCalled();
  expect(time_line.style.width).toBe("551px");
  expect(clearInterval).toHaveBeenCalled();

  startTimerLine(0, DOMSelector, DOMManipulate,set_Counter);
  jest.runOnlyPendingTimers();

  expect(setInterval).toHaveBeenCalled();
  expect(time_line.style.width).toBe("34px");
  

});

it('Testing queCounter function', () => {
  let bottom_count = document.querySelector("footer .total_que")
  queCounter(1, DOMSelector, DOMManipulate, questions)
  expect(bottom_count.innerHTML).toBe(`<span><p>1</p> of <p>5</p> Questions</span>`);
});


it('Testing clickstsrt function', () => {
 
  let info_box = document.querySelector(".info_box");
  clickstart(DOMSelector, DOMManipulate);
  expect(info_box.className).toBe("info_box activeInfo");
});

it('Testing clickcontinue function', () => {
  let info_box = document.querySelector(".info_box");
  let quiz_box = document.querySelector(".quiz_box");
  let que = document.querySelector(".que_text").innerHTML
  let bottom_count = document.querySelector("footer .total_que");
  const timeCount = document.querySelector(".timer .timer_sec");
  const time_line = document.querySelector("header .time_line");
  clickContinue(DOMSelector, DOMManipulate, questions, set_Counter,showQuetions,queCounter,startTimer,startTimerLine,mutatingVariables,setOnClick);
  expect(info_box.className).not.toBe("info_box activeInfo");
  expect(quiz_box.className).toBe("quiz_box activeQuiz")
  expect(que).not.toBeNull();
  expect(bottom_count.innerHTML).toBe(`<span><p>1</p> of <p>5</p> Questions</span>`);
  expect(timeCount.textContent).toBe("15");
  expect(time_line.style.width).toBe("");
});

it('Testing next function', () => {
  const timeText = document.querySelector(".timer .time_left_txt");
  const next_btn = document.querySelector("footer .next_btn");
  let que = document.querySelector(".que_text").innerHTML
  let bottom_count = document.querySelector("footer .total_que");
  const timeCount = document.querySelector(".timer .timer_sec");
  const time_line = document.querySelector("header .time_line");
  let result = document.querySelector(".result_box");
  next(DOMSelector, DOMManipulate, mutatingVariables, questions,setOnClick ,set_Counter,showQuetions,queCounter,startTimer,startTimerLine,showResult);
  expect(next_btn.className).not.toBe("show");
  expect(timeText.textContent).toBe("Time Left");
  expect(que).not.toBeNull();
  expect(bottom_count.innerHTML).toBe(`<span><p>2</p> of <p>5</p> Questions</span>`);
  expect(timeCount.textContent).toBe("15");
  expect(time_line.style.width).toBe("");

  mutatingVariables.incrementQue();
  mutatingVariables.incrementQue();
  mutatingVariables.incrementQue();
  mutatingVariables.incrementQue();
 
  next(DOMSelector, DOMManipulate, mutatingVariables, questions,setOnClick ,set_Counter,showQuetions,queCounter,startTimer,startTimerLine,showResult)
  expect(result.classList[1]).toBe("activeResult")

});

it('Testing restart function', () => {
  let quiz_box = document.querySelector(".quiz_box");
  const timeText = document.querySelector(".timer .time_left_txt");
  let result = document.querySelector(".result_box");
  const next_btn = document.querySelector("footer .next_btn");
  let que = document.querySelector(".que_text").innerHTML
  let bottom_count = document.querySelector("footer .total_que");
  const timeCount = document.querySelector(".timer .timer_sec");
  const time_line = document.querySelector("header .time_line");

  restart(DOMSelector, DOMManipulate, mutatingVariables, questions, set_Counter,setOnClick,showQuetions,queCounter,startTimer,startTimerLine);

  expect(quiz_box.className).toBe("quiz_box activeQuiz")
  expect(next_btn.className).not.toBe("show");
  expect(timeText.textContent).toBe("Time Left");
  expect(result.classList[1]).not.toBe("activeResult")
  expect(que).not.toBeNull();
  expect(bottom_count.innerHTML).toBe(`<span><p>1</p> of <p>5</p> Questions</span>`);
  expect(timeCount.textContent).toBe("15");
  expect(time_line.style.width).toBe("");
});

it('Testing exit function', () => {
 let info_box = document.querySelector(".info_box");
 exit(DOMSelector, DOMManipulate);
 expect(info_box.className).not.toBe("info_box activeInfo");
});
});


































 
//   describe('Function clickstart,exit,next,quit,restart should work as required', () => {
//     test('clickstart function should call two functions and add class "activeInfo" to element', () =>{
//         const mockDOMSelector = jest.fn((element,method,value) => element.querySelector(value))
           
//         const mockDOMManipulate = jest.fn((element,method,value) => element.classList.add(value))
       
//         clickstart(mockDOMSelector,mockDOMManipulate)
//         expect(mockDOMSelector.mock.calls.length).toBe(1)
//         expect(mockDOMManipulate.mock.calls.length).toBe(1)
//         expect(document.getElementsByClassName("activeInfo").length).toBe(1);
//     });
    
//     test('Function exit should call two functions and remove class activeInfo',() =>{
//         const mockDOMSelector = jest.fn((element,method,value) => element.querySelector(value))
           
//         const mockDOMManipulate = jest.fn((element,method,value) => element.classList.remove(value))
//         exit(mockDOMSelector,mockDOMManipulate)
    
//         expect(mockDOMSelector.mock.calls.length).toBe(1)
//         expect(mockDOMManipulate.mock.calls.length).toBe(1)
//         expect(document.getElementsByClassName("activeInfo").length).toBe(0);
//     });
// });

 




  





