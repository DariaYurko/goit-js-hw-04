/**
 * Adds elements from one array to another one (the second array may not be empty)
 * @param {Array} array
 * @param {Array} newArr
 */
function getNewArray(array, newArr) {
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]);
  }
}

/**
 * To create a new array that contains all elements from firstArray and then all elements from secondArray.
 * Return a copy of the array with the length maxLength of elements.
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @param {Number} maxLength
 * @returns {Array}
 */
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = [];
  const finalArray = [];

  getNewArray(firstArray, newArray);
  getNewArray(secondArray, newArray);

  for (let i = 0; i < maxLength; i++) {
    finalArray[i] = newArray[i];
  }
  return finalArray;
}

// Check
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
