// separate side effects - DOM manipulatiing, mutating variables, data fetching and pass them through dependency injectionc
import {DOMSelector } from "./modules/dom_selector.js";
import { DOMManipulate } from "./modules/dom_manipulate.js";
import { mutatingVariables } from "./modules/mutating_variables.js";
import {  setOnClick } from "./modules/set_click_attribute.js";
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



// if startQuiz button clicked
const start_btn = DOMSelector(document, "method", ".start_btn button");
setOnClick(start_btn, clickstart, DOMSelector, DOMManipulate);


// if exitQuiz button clicked
const exit_btn = DOMSelector(DOMSelector(document, "method", ".info_box"),"method",".buttons .quit");
setOnClick(exit_btn, exit, DOMSelector, DOMManipulate);


// if continueQuiz button clicked
const continue_btn = DOMSelector(DOMSelector(document, "method", ".info_box"),"method",".buttons .restart");
setOnClick(continue_btn,clickContinue,DOMSelector,DOMManipulate,questions, set_Counter,showQuetions, queCounter,startTimer,startTimerLine,mutatingVariables,setOnClick);


// if restartQuiz button clicked
const restart_quiz = DOMSelector(
  DOMSelector(document, "method", ".result_box"),
  "method",
  ".buttons .restart"
  );
setOnClick( restart_quiz, restart, DOMSelector, DOMManipulate, mutatingVariables, questions, set_Counter,setOnClick,showQuetions,queCounter,startTimer,startTimerLine
);


// if quitQuiz button clicked
const quit_quiz = DOMSelector(
  DOMSelector(document, "method", ".result_box"),
  "method",
  ".buttons .quit"
);
setOnClick(quit_quiz, quit, DOMManipulate);
function quit() {
  DOMManipulate(window, "location"); //reload the current window
}

// if Next Que button clicked
const next_btn = DOMSelector(document, "method", "footer .next_btn");
setOnClick(next_btn,next,DOMSelector,DOMManipulate,mutatingVariables,questions,setOnClick,set_Counter,showQuetions,queCounter,startTimer,startTimerLine,showResult);













 

