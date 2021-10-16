import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

import { DOMSelector } from "./modules/dom_selector.js";
import { DOMManipulate } from "./modules/dom_manipulate.js";
import { mutatingVariables } from "./modules/mutating_variables.js";
import { setClickAttribute } from "./modules/set_click_attribute.js";

let dom;
let container;

const html = fs.readFileSync(path.resolve("./index.html"), "utf8");

describe("Test for individual functions", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  it("DOMSelector should return the required DOM element", () => {
    const result = container.querySelector(".start_btn button");
    expect(DOMSelector(container, "method", ".start_btn button")).toBe(result);
  });

  it('When the "continue" button is clicked,a new class is added to the div tag', () => {
    document.body.innerHTML = `<div class="info_box"> 
            <button class="restart">  Continue </button>
         </div>`;

    const info_box = document.querySelector(".info_box");
    const button = document.querySelector(".restart");
    button.onclick = () => {
      DOMManipulate(info_box, "classList.add", "Info");
    };
    button.click();

    expect(document.getElementsByClassName("Info").length).toEqual(1);
  });

  it('When "getValues()" is called the values of  "que_count"  ,"que_numb" and "userScore" is returned ', () => {
    const Values = mutatingVariables.getValues();
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    const arrReturned = [que_count, que_numb, userScore];

    expect(Values).toEqual(arrReturned);
  });

  it('When the "incrementQue()" is called "que_count" and "que_numb" is incremented ', () => {
    const [startQue_Count, startQue_Numb] = mutatingVariables.getValues();
    const [que_count, que_numb] = mutatingVariables.incrementQue();

    expect(que_count).toBe(startQue_Count + 1);
    expect(que_numb).toBe(startQue_Numb + 1);
  });

  it('When "restartValues()" is called the values of  "que_count" ,"que_numb" and "userScore" is reset  ', () => {
    const Values = mutatingVariables.restartValues();
    let que_count = 0;
    let que_numb = 1;
    let userScore = 0;
    const arrReturned = [que_count, que_numb, userScore];

    expect(Values).toEqual(arrReturned);
  });

  it("when the setClickAttribute function is called the onclick atribute of an element is set to a function", () => {
    document.body.innerHTML = `<button class="set_attribute"> Set Attribute </button>`;
    const button = document.querySelector(".set_attribute");
    setClickAttribute(
      button,
      DOMManipulate,
      button,
      "classList.add",
      "attributeAdded"
    );
    button.click();
    expect(document.getElementsByClassName("attributeAdded").length).toEqual(1);
  });
});
