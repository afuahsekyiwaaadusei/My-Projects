// separate side effects - DOM manipulatiing, mutating variables, data fetching and pass them through dependency injection 

function DOMSelector(object, method, selector){
    switch(method){
    case "method":
        return object.querySelector(selector);
        break;
    case "methodAll":
        return object.querySelectorAll(selector);
        break;
    default:
        console.log("failed")
    
    }
}


function DOMManipulate(element, action, value1 = "", value2 = ""){
	switch(action){
		case "classList.add":
			 element.classList.add(value1);
             
			break;
		case "classList.remove":
			 element.classList.remove(value1);
			break;
		case "textContent":
			 element.textContent = value1;
			break;
        case "textContent":
			 element.textContent = value1;
			break;
        case "textContent1":
			return element.textContent ;
			break;
		case "innerHTML":
			 element.innerHTML = value1;
             
			break;
		case "setAttribute":
			element.setAttribute(value1, value2);
			break;		
		case "insertAdjacentHTML":
			element.insertAdjacentHTML(value1, value2);
			break;
        case "style.width":
            element.style.width = value1 
            break;
        case "location":
            element.location.reload()
        case "onclick":
            element.onclick = () => {value1}     
        default:
            console.log("failed")
            break;
	}
		


}

const mutatingVariables = (() =>{
    
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    
    return {
         incrementQue(){
            que_count++
            que_numb++
            return [que_count, que_numb, userScore]
        },
        incrementScore(){
            userScore += 1
            return [que_count, que_numb, userScore]
        },
        getValues(){
            return [que_count, que_numb, userScore]
        },
        restartValues(){
            timeValue = 15;
             que_count = 0;
             que_numb = 1;
             userScore = 0;
             widthValue = 0;
             return [que_count, que_numb, userScore]
        }
    }
})();


function setClickAttribute(element,func,...args){
    let attr = args
    element.onclick = () => {func(...attr)}
}

function Data(questions){

return questions
};


let counter;
let counterLine;


// if startQuiz button clicked
const start_btn = DOMSelector(document, "method", ".start_btn button" );
setClickAttribute(start_btn, clickstart,DOMSelector,DOMManipulate);
function clickstart(DOMSelector, DOMManipulate) {
    const info_box = DOMSelector(document, "method", ".info_box");
    DOMManipulate(info_box,"classList.add", "activeInfo");
    
}





// if exitQuiz button clicked
 const exit_btn = DOMSelector(DOMSelector(document, "method", ".info_box"), "method", ".buttons .quit");
 setClickAttribute(exit_btn, exit, DOMSelector,DOMManipulate);
 function exit(DOMSelector,DOMManipulate) {
    const info_box = DOMSelector(document, "method", ".info_box");
    DOMManipulate(info_box,"classList.remove", "activeInfo");//hide info box
  }



// if continueQuiz button clicked
const continue_btn = DOMSelector(DOMSelector(document, "method", ".info_box"), "method", ".buttons .restart");
setClickAttribute(continue_btn, clickContinue, DOMSelector,DOMManipulate,Data );
function clickContinue(DOMSelector,DOMManipulate,Data ) {
    // call all required DOMSelectors and equate to a variable
    const info_box = DOMSelector(document, "method", ".info_box");
    const quiz_box = DOMSelector(document, "method", ".quiz_box");
    DOMManipulate(info_box,"classList.remove", "activeInfo");//hide info box
    DOMManipulate(quiz_box,"classList.add", "activeQuiz");//show quiz box
    showQuetions(0, DOMSelector, DOMManipulate,Data); //calling showQestions function
    queCounter(1, DOMSelector, DOMManipulate, Data); //passing 1 parameter to queCounter
    startTimer(15, DOMSelector, DOMManipulate, mutatingVariables, Data); //calling startTimer function
    startTimerLine(0, DOMSelector, DOMManipulate); //calling startTimerLine function
} 



// if restartQuiz button clicked
const restart_quiz = DOMSelector( DOMSelector(document, "method", ".result_box"), "method",".buttons .restart");
setClickAttribute(restart_quiz, restart, DOMSelector, DOMManipulate, mutatingVariables,Data);
function restart(DOMSelector,DOMManipulate,mutatingVariables,Data) {
  
    //call all required DOM Selectors and equate to a value
    const quiz_box = DOMSelector(document, "method", ".quiz_box");
    const result_box = DOMSelector(document, "method", ".result_box");
    const timeText =  DOMSelector(document, "method",".timer .time_left_txt");

    // declaring variables
    let [que_count, que_numb] = mutatingVariables.restartValues(); // call "mutatingVariables.restartValues()" to reset variables
    const next_btn =  DOMSelector(document, "method","footer .next_btn");
    const timeValue = 15;
    const widthValue = 0;

    DOMManipulate(quiz_box, "classList.add", "activeQuiz"); //show quiz box
    DOMManipulate(result_box, "classList.remove", "activeResult"); //hide result box
    showQuetions(que_count,DOMSelector,DOMManipulate, Data); //calling showQestions function
    queCounter(que_numb,DOMSelector, DOMManipulate, Data); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue, DOMSelector, DOMManipulate, mutatingVariables, Data); //calling startTimer function
    startTimerLine(widthValue, DOMSelector, DOMManipulate); //calling startTimerLine function
    DOMManipulate(timeText, "textContent", "Time Left"); //change the text of timeText to Time Left
    DOMManipulate(next_btn, "classList.remove","show" ); //hide the next button
}



// if quitQuiz button clicked
const quit_quiz = DOMSelector(DOMSelector(document, "method", ".result_box"), "method",".buttons .quit");
setClickAttribute(quit_quiz, quit, DOMManipulate);
function quit() {
     DOMManipulate(window, "location"); //reload the current window
}



// if Next Que button clicked
const next_btn = DOMSelector(document, "method", "footer .next_btn");
setClickAttribute(next_btn, next, DOMSelector, DOMManipulate, mutatingVariables,Data)
function next(DOMSelector,DOMManipulate,mutatingVariables,Data){
     let [que_count,que_numb] = mutatingVariables.getValues();
     const timeText =  DOMSelector(document, "method",".timer .time_left_txt");
     const next_btn =  DOMSelector(document, "method","footer .next_btn");
     const timeValue = 15;
     const widthValue = 0;
     let question = Data(questions)
     if(que_count < question.length - 1){ //if question count is less than total question length
        [que_count, que_numb,userScore] =mutatingVariables.incrementQue(); //increment the que_count value and increment the que_numb value
        showQuetions(que_count,DOMSelector,DOMManipulate, Data); //calling showQestions function
        queCounter(que_numb,DOMSelector, DOMManipulate, Data); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue, DOMSelector, DOMManipulate,mutatingVariables, Data); //calling startTimer function
        startTimerLine(widthValue,DOMSelector, DOMManipulate); //calling startTimerLine function
         DOMManipulate(timeText, "textContent", "Time Left"); //change the text of timeText to Time Left
        DOMManipulate(next_btn, "classList.remove","show" ); //hide the next button
     }else{
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(DOMSelector, DOMManipulate, mutatingVariables,Data); //calling showResult function
        }
 }
 




// getting questions and options from array
function showQuetions(index, DOMSelector, DOMManipulate,Data){
    let question = Data(questions)
    const que_text = DOMSelector(document, "method", ".que_text");
    const option_list = DOMSelector(document, "method",".option_list");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ question[index].numb + ". " + question[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ question[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ question[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ question[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ question[index].options[3] +'</span></div>';
    DOMManipulate(que_text,"innerHTML", que_tag,) //adding new span tag inside que_tag
    DOMManipulate(option_list, "innerHTML", option_tag) //adding new div tag inside option_tag
    const option = DOMSelector(option_list, "methodAll", ".option")
    
    // set onclick attribute to all available options
     function setOnclickAttribute(i = 0){
        if(i < option.length){
            //option[i].setAttribute("onclick", "optionSelected(this,DOMManipulate)")
            DOMManipulate(option[i], "setAttribute", "onclick", "optionSelected(this, DOMSelector, DOMManipulate, mutatingVariables,Data)")
            setOnclickAttribute(i + 1);
        }

        
      }
      setOnclickAttribute();
    
}





//if user clicked on option
function optionSelected(answer,DOMSelector, DOMManipulate,mutatingVariables,Data){
    let question = Data(questions)
    let [que_count,,userScore] = mutatingVariables.getValues(); // getting que_count , userScore 
    let userAns = DOMManipulate(answer, "textContent1" ); //getting user selected option
    let correcAns = question[que_count].answer; //getting correct answer from array
    const option_list = DOMSelector(document, "method",".option_list");
    const next_btn =  DOMSelector(document, "method","footer .next_btn");
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';// creating the new div tag  for icon

    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        
        [,, userScore] =  mutatingVariables.incrementScore();  //userScore += 1; //upgrading score value with 1
        DOMManipulate(answer,"classList.add", "correct"); //adding green color to correct selected option
        DOMManipulate(answer, "insertAdjacentHTML", "beforeend", tickIconTag); //adding tick icon to correct selected option
    }else{
        DOMManipulate(answer, "classList.add", "incorrect");  //adding red color to wrong selected option
        DOMManipulate(answer, "insertAdjacentHTML", "beforeend", crossIconTag);  //adding cross icon to wrong selected option
        autoSelect();

        function autoSelect( i = 0){
            if(i < allOptions) 
            {
                if(option_list.children[i].textContent == correcAns)
                { //if there is an option which is matched to an array answer 
                    DOMManipulate(option_list.children[i], "setAttribute","class", "option correct" ); //adding green color to matched option
                    DOMManipulate(option_list.children[i], "insertAdjacentHTML","beforeend", tickIconTag ); //adding tick icon to matched option
                }
                autoSelect( i + 1);
            }
        }
    }

    function disableOptions( i = 0) {
        if(i < allOptions){
            DOMManipulate(option_list.children[i], "classList.add","disabled" ); //once user select an option then disabled all options
            disableOptions( i + 1);
        }
    }
    disableOptions()

    DOMManipulate(next_btn, "classList.add", "show"); //show the next button if user selected any option
}
    

function showResult(DOMSelector, DOMManipulate, mutatingVariables, Data){

    let question = Data(questions)
    //  destructure  required mutatingVariable
    let [,,userScore] = mutatingVariables.getValues();


    //calll all required DOMSelectors
    const info_box = DOMSelector(document, "method", ".info_box");
    const quiz_box = DOMSelector(document, "method", ".quiz_box");
    const result_box = DOMSelector(document, "method", ".result_box");
    

    //Call DOMMAnipulate function to do required DOM manipulation
    DOMManipulate(info_box, "classList.remove", "activeInfo"); //hide info box
    DOMManipulate(quiz_box, "classList.remove", "activeQuiz");  //hide quiz box
    DOMManipulate(result_box, "classList.add", "activeResult"); //show result box

  
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ question.length +'</p></span>';
        DOMManipulate(scoreText,"innerHTML", scoreTag); //adding new span tag inside score_Text
       
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ question.length +'</p></span>';
        DOMManipulate(scoreText,"innerHTML", scoreTag); //setting Score
       
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ question.length +'</p></span>';
        DOMManipulate(scoreText,"innerHTML", scoreTag); // setting Score
        
    }
}



function startTimer(time, DOMSelector, DOMManipulate, mutatingVariables, Data ){
    
    let question = Data(questions)
    let [que_count] = mutatingVariables.getValues();
    const option_list = DOMSelector(document, "method",".option_list");
    const timeText =  DOMSelector(document, "method",".timer .time_left_txt");
    const timeCount = DOMSelector(document, "method",".timer .timer_sec");
    const next_btn =  DOMSelector(document, "method","footer .next_btn");
    let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>'; // creating the new div tag  for icon
    
    counter = setInterval(timer, 1000);


    function timer(){
        DOMManipulate(timeCount, "textContent", time); //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = DOMManipulate(timeCount, "textContent1"); 
            DOMManipulate(timeCount, "textContent", "0" + addZero); //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            DOMManipulate(timeText, "textContent", "Time Off") //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = question[que_count].answer; //getting correct answer from array

            function autoSelect( i = 0) {
                if(i < allOptions){
                    if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                        DOMManipulate( option_list.children[i], "setAttribute","class", "option correct"); //adding green color to matched option
                        DOMManipulate( option_list.children[i], "insertAdjacentHTML","beforeend", tickIconTag); //adding tick icon to matched option
                    }
                    DOMManipulate( option_list.children[i], "classList.add","disabled");  //once  an option is auto selected  disable all  options
                    
                    autoSelect( i + 1)
                }
            }
            autoSelect();

            DOMManipulate(next_btn, "classList.add", "show") //show the next button if user selected any option
        }
    }
}




function startTimerLine(time, DOMSelector, DOMManipulate){
    const time_line = DOMSelector(document, "method","header .time_line");

    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        DOMManipulate(time_line, "style.width", time + "px"); //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index,DOMSelector, DOMManipulate, Data){
    let question = Data(questions)
    const bottom_ques_counter =  DOMSelector(document, "method","footer .total_que");
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ question.length +'</p> Questions</span>';
    DOMManipulate(bottom_ques_counter, "innerHTML",totalQueCounTag ); //adding new span tag inside bottom_ques_counter
}

module.exports = {
    DOMSelector: DOMSelector,
    DOMManipulate: DOMManipulate,
    mutatingVariables: mutatingVariables,
setClickAttribute: setClickAttribute,
};






    // 
    // Data: Data,
    // startQuiz: startQuiz,
    // exitQuiz:exitQuiz,
    // continueQuiz: continueQuiz,
    // restartQuiz: restartQuiz,
    // quitQuiz: quitQuiz,
    // nextQuestion: nextQuestion,
    // showQuetions: showQuetions,
    // optionSelected: optionSelected,
    // showResult: showResult,
    // startTimer: startTimer,
    // startTimerLine: startTimerLine,
    // queCounter: queCounter