const { div } = require("prelude-ls");

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



window.onload = setClickAttribute()

function setClickAttribute(element,func,...args){
    let attr = args
    element.onclick = () => {func(...attr)}
}



// if startQuiz button clicked
const start_btn = DOMSelector(document, "method", ".start_btn button" );
setClickAttribute(start_btn, clickstart,DOMSelector,DOMManipulate);
function clickstart(DOMSelector, DOMManipulate) {
    const info_box = DOMSelector(document, "method", ".info_box");
    DOMManipulate(info_box,"classList.add", "activeInfo");
    
}



module.exports = {
    DOMSelector: DOMSelector,
    DOMManipulate: DOMManipulate,
    mutatingVariables: mutatingVariables,
    setClickAttribute: setClickAttribute,
    clickstart: clickstart
};