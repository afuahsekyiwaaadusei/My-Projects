/**
 * @jest-environment jsdom
 */


 const { expect, afterAll } = require('@jest/globals');
const { describe } = require('yargs');
const {DOMSelector,DOMManipulate,mutatingVariables,setClickAttribute,clickstart} = require('./function');

 
 afterAll(() => {})
 
 test('DOMSelector should return the required DOM element', () =>{
     result = document.querySelector(".start_btn button" );
     expect(DOMSelector(document, "method", ".start_btn button" )).toBe(result)
 });
 
 test('When the "continue" button is clicked,a new class is added to the div tag', () => {
    document.body.innerHTML =
    `<div class="info_box"> 
        <button class="restart">  Continue </button>
     </div>`
 
 info_box = document.querySelector('.info_box')
 button = document.querySelector(".restart")
 button.onclick = () => {
     DOMManipulate(info_box,"classList.add", "Info");
 };
 button.click();
 
 
 expect(document.getElementsByClassName("Info").length).toEqual(1);
 })
 

test('When "getValues()" is called the values of  "que_count"  ,"que_numb" and "userScore" is returned ', () => {
        const Values = mutatingVariables.getValues()
        let que_count= 0;
        let que_numb = 1;
        let userScore = 0;
        const arrReturned = [que_count,que_numb,userScore]

        expect(Values).toEqual(arrReturned)
        
    });

test('When the "incrementQue()" is called "que_count" and "que_numb" is incremented ', () => {
        const [startQue_Count,startQue_Numb] = mutatingVariables.getValues()
        const [que_count,que_numb] = mutatingVariables.incrementQue()

        expect(que_count).toBe(startQue_Count + 1)
        expect(que_numb).toBe(startQue_Numb + 1)
    });
 
test('When "restartValues()" is called the values of  "que_count" ,"que_numb" and "userScore" is reset  ', () => {
        const Values = mutatingVariables.restartValues()
        let que_count= 0;
        let que_numb = 1;
        let userScore = 0;
        const arrReturned = [que_count,que_numb,userScore]

        expect(Values).toEqual(arrReturned)
        
    });


test('when the setClickAttribute function is called the onclick atribute of an element is set to a function', () =>{
    `<button> Set Attribute </button>`
    setClickAttribute(button,DOMManipulate, button,"classList.add","attributeAdded")
    button.click()
    expect(document.getElementsByClassName("attributeAdded").length).toEqual(1);
})

describe('Testing if the click of start,exit,continue,next,restart and quit button responds as expected', () => {
    test('clickstart function should call two functions and add class "activeInfo" to element', () =>{
        `<button class= "info_box"> Start </button>`
        const mockDOMSelector = jest.fn((element,method,value) => {
            return function () {element.querySelector(value)}
        })
        const mockDOMManipulate = jest.fn((element,method,value) => {
            return function () {element.classList.add(value)}
        })
        clickstart(mockDOMSelector,mockDOMManipulate);
        expect(mockDOMSelector.mock.calls.length).toBe(1)
        expect(mockDOMManipulate.mock.calls.length).toBe(1)
        expect(document.getElementsByClassName("activeInfo").length).toEqual(1);
        
    })
});

