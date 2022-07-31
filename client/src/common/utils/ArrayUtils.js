export default {
  isNumberArray: (arr) => arr.every((element) => typeof +element === 'number'),

  getAverage: (arr) => {
    const sum = arr.reduce((a, b) => +a + +b, 0);
    const avg = sum / arr.length || 0;
    return Math.round((avg + Number.EPSILON) * 10) / 10;
  },
};
