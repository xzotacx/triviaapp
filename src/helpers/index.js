export const sortRandomAnswerArray = (arr) => {
  const option = ["A", "B", "C", "D"];
  const sortedAnswer = arr.sort(() => {
    return Math.random() - 0.5;
  });
  return sortedAnswer.map((el, index) => {
    return { ...el, option: option[index] };
  });
};
export const textFormatter = (text) => {
  if (text.includes("&quot;")) {
    text = text.replace(/&quot;/g, '"');
  }
  if (text.includes("&#039;")) {
    text = text.replace(/&#039;/g, "'");
  }
  return text;
};
export const ascendentSort = (arr) => {
  return arr.sort((a, b) => {
    if (a.maxScore < b.maxScore) {
      return 1;
    }
    if (a.maxScore > b.maxScore) {
      return -1;
    }
    return 0;
  });
};
