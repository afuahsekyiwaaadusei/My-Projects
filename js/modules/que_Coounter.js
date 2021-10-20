export function queCounter(index, DOMSelector, DOMManipulate, questions) {
    const bottom_ques_counter = DOMSelector(
      document,
      "method",
      "footer .total_que"
    );
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag =
      "<span><p>" +
      index +
      "</p> of <p>" +
      questions.length +
      "</p> Questions</span>";
    DOMManipulate(bottom_ques_counter, "innerHTML", totalQueCounTag); //adding new span tag inside bottom_ques_counter
  }