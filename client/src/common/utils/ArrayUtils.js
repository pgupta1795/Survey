const roundOff = (number) => Math.round((number + Number.EPSILON) * 100) / 100;

export default {
  isNumberArray: (arr) => arr.every((element) => typeof +element === 'number'),

  getAverage: (arr) => {
    const sum = arr.reduce((a, b) => +a + +b, 0);
    const avg = sum / arr.length || 0;
    return roundOff(avg);
  },

  /**
   * returns count of the element in the array
   * @param {*} arr
   * @param {*} val
   * @returns
   */
  getElementCount: (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0),

  averageOfArrays: ([...arrays]) => {
    const result = arrays[0].map((element, index) => {
      if (Number.isNaN(Number(element))) return element;
      let total = 0;
      for (const arr of arrays) {
        total += +arr[index];
      }
      return roundOff(total / arrays.length);
    });
    return result;
  },

  averageOfObjectArrays: ([...arrays]) => {
    const result = Object.values(arrays[0]).map((element, index) => {
      if (Number.isNaN(Number(element))) return element;
      let total = 0;
      for (const arr of arrays) {
        total += +Object.values(arr)[index];
      }
      return roundOff(total / arrays.length);
    });
    return result;
  },
};
