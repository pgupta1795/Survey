export default {
  isNumberArray: (arr) => arr.every((element) => typeof +element === 'number'),

  getAverage: (arr) => {
    const sum = arr.reduce((a, b) => +a + +b, 0);
    const avg = sum / arr.length || 0;
    return Math.round((avg + Number.EPSILON) * 10) / 10;
  },

  /**
   * returns count of the element in the array
   * @param {*} arr
   * @param {*} val
   * @returns
   */
  getElementCount: (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0),
};
