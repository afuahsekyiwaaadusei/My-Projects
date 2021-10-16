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
      const que_count = 0;
      const que_numb = 1;
      const userScore = 0;
      const widthValue = 0;
      return [que_count, que_numb, userScore];
    },
  };
})();
