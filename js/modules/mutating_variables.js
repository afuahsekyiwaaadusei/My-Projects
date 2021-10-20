export const mutatingVariables = (() => {
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;

  return {
    incrementQue() {
      que_count++;
      que_numb++;
      return [que_count, que_numb, userScore];
    },
    incrementScore() {
      userScore += 1;
      return [que_count, que_numb, userScore];
    },
    getValues() {
      return [que_count, que_numb, userScore];
    },
    restartValues() {
      const timeValue = 15;
       que_count = 0;
       que_numb = 1;
       userScore = 0;
      const widthValue = 0;
      return [que_count, que_numb, userScore];
    },
  };
})();
