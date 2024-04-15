/*                                               ARRAYs                                                                  */
/*************************************************************************************************************************/
const planets = ["Venus", "Earth", "Mars"];
console.log(planets); // [ 'Venus', 'Earth', 'Mars' ]

planets[0] = "Uranus"; //Перевизначення елементів масиву дозволяє нам оновлювати дані та модифікувати масив
console.log(planets); // [ 'Uranus', 'Earth', 'Mars' ]

// console.log(planets.length); // Довжина масиву planets = ["Venus", "Earth", "Mars"]
// console.log(planets.length - 1); // Індекс останнього елемента - "Mars"

/***************************************************************************************************
 * Переменные  a, b содержат внутри себя число 5, примитивный тип данных(number),
 */
const a = 5;
const b = 5;
a === b; // true

/**
 * Переменные A, B созданы одном месте памяти, а сам массив(обьект) находится в другом месте памяти
 * Переменные A, B содержат внутри себя ССЫЛКУ на обьект в памяти, ссылочный тип данных(обьект).
 *
 */
const A = [0, 1];
const B = [0, 1];
const copyA = A; // copyA теперь содержит в себе ссылку на тот же обьект что и переменная А
A === B; // false
A === copyA; // true

copyA[0] = 2;
console.log(A); //[ 2, 1 ]
/************************************************************************************************** */

/****************************************************************************************************
 *  Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
 *  Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
 * перший елемент - це індекс останнього елементу у масиві array
 * другий елемент - це значення останнього елементу у масиві array */
// function getLastElementMeta(array) {
//   const indexOfLastElement = array.length - 1;
//   const valueOfLastElement = array[indexOfLastElement];
//   const newArr = [];
//   newArr[0] = indexOfLastElement;
//   newArr[1] = valueOfLastElement;
//   return newArr;
// }
// console.log(getLastElementMeta(["Venus", "Earth", "Mars"]));
//******************************************************************************************************

/**********************************************************************************************************
 * Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини.
 * Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.
 */
// function getExtremeElements(array) {
//   const newArr = [];
//   newArr[0] = array[0];
//   newArr[1] = array[array.length - 1];

//   return newArr;
// }
// console.log(getExtremeElements(["Venus", "Earth", "Mars"]));

/**********************************************************************************************
 * Оголошена функція calculateEngravingPrice(message, pricePerWord).
 * Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message)
 * та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).
 * Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
 * @param {String} message
 * @param {Number} pricePerWord
 * @param {Number} totalPrice
 */
// function calculateEngravingPrice(message, pricePerWord) {
//    const arrayWordsFromMessage = message.split(" ")
//    const totalPrice = arrayWordsFromMessage.length * pricePerWord

//    return totalPrice
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//*********************************************************************************************** */

/***************************************************************************************************
 * Функція getSlice(array, value) приймає два параметра:
array - масив довільних елементів
value - значення елемента масиву для пошуку
Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value 
у масиві array і повертала:
порожній масив, якщо в array немає елемента зі значенням value
підмасив, що починається з початку array і до елемента зі значенням value включно, 
якщо такий елемент є в array
 */
// function getSlice(array, value) {
// // version IF
//   if (array.indexOf(value) === -1) {
//     return [];
//   }
//   return array.slice(0, array.indexOf(value) + 1);

// // version ternary operator
// //   const sliceOfArray = array.indexOf(value) === -1 ? [] : array.slice(0, array.indexOf(value) + 1);
// //   return sliceOfArray;
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
/***************************************************************************************************/

/*****************************************************************************************************
 * Функція createArrayOfNumbers(min, max) приймає два параметра:
 * 
min - ціле число, з якого починаються обчислення
max - ціле число, до якого включно триватимуть обчислення

Доповни код функції createArrayOfNumbers(min, max) таким чином,
щоб вона повертала масив усіх цілих чисел від значення min до max включно.
 */

// function createArrayOfNumbers(min, max) {
//   const myArr = [];
//   for (let i = min; i <= max; i++) {
//     myArr.push(i);
//   }
//   return myArr;
// }
// console.log(createArrayOfNumbers(29, 34)); // [ 29, 30, 31, 32, 33, 34 ]
//*********************************************************************************************

/************************************************************************************************
 * CONCAT() - ОБ'ЄДНАТИ МАСИВИ
 */
// const arrStr = ["Dasha", "Yura"]
// const arrNum = [1, 2]
// const concatArr1 = arrStr.concat(arrNum)
// const concatArr2 = arrNum.concat(arrStr)
// console.log(arrStr.concat(arrNum));
// console.log(concatArr2);
// console.log(typeof concatArr2[0]);
//*************************************************************************************************

/*****************************************************************************************************
 * Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
 * Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
 * @param {Array} order
 * @returns {Number}
 */
// function calculateTotalPrice(order) {
//   let totalSumOfNumbers = 0;
//   for (let i = 0; i < order.length; i++) {
//     totalSumOfNumbers = totalSumOfNumbers + order[i];
//   }
//   return totalSumOfNumbers;
// }
// console.log(calculateTotalPrice([164, 48, 291])) // 503
//*************************************************************************************************

/**************************************************************************************************
 * Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
 * Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
 * Якщо жодного парного числа немає, то масив має бути пустим.
 * Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
 * @param {Number} start
 * @param {Number} end
 * @returns {Array}
 */
// function getEvenNumbers(start, end) {
//    const arrayOfEvenNum = []
//    for (let i = start; i <= end; i++) {
//       if (i % 2 === 0) {
//          arrayOfEvenNum.push(i)
//       }
//    }
//    return arrayOfEvenNum
// }
// console.log(getEvenNumbers(6, 12));
// ******************************************************************************************************

/******************************************************************************************************
 * Функція checkStorage(storage, item) приймає два параметри:
 * 
- storage - масив рядків, що описує доступні товари на складі
- item - рядок з назвою товара, наявність якого потрібно перевірити

 Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
- рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
- рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві

Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" 
мають бути знайдені у масиві ["apple", "plum", "pear"].
 * @param {Array} storage 
 * @param {String} item 
 * @returns {String}
 */
// function checkStorage(storage, item) {
//   // Version IF
//   const itemToLowerCase = item.toLowerCase();
//   if (storage.includes(itemToLowerCase)) {
//     return `${itemToLowerCase} is available to order!`;
//   }
//   return "Sorry! We are out of stock!";

//   // Version Ternary operator
//   //   const itemToLowerCase = item.toLowerCase();
//   //   const message =
//   //     storage.includes(itemToLowerCase) === true
//   //       ? `${itemToLowerCase} is available to order!`
//   //       : "Sorry! We are out of stock!";
//   //   return message;
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
//************************************************************************************************************

/*************************************************************************************************************
 * Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
 * Поверни наповнений масив спільних елементів як результат роботи функції.
 * @param {Array} array1
 * @param {Array} array2
 * @returns {Array}
 */
// function getCommonElements(array1, array2) {
//    const arrOfCommonElements = [];
//    for (let i = 0; i < array1.length; i++) {
//       if (array2.includes(array1[i])) {
//         arrOfCommonElements.push(array1[i]);
//       }
//    }
//    return arrOfCommonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
/**************************************************************************************************************/

/**
 * *************************************************************************************************************
 *                                      Цикл for...of                                                          *
 ***************************************************************************************************************
 * Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
 *  Використай цикл for...of для перебору масиву.
 * @param {Array} order
 * @returns {Num} totalSum
 */
// function calculateTotalPrice(order) {
//   let totalSum = 0;
//   for (const num of order) {
//     totalSum = totalSum + num;
//   }
//   return totalSum;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
/************************************************************************************************************* */

/****************************************************************************************************************
 * Функція createReversedArray() може приймати довільну кількість аргументів.
 * Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
 * Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1].
 * Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і
 * результатом роботи повертає новий масив з елементами у зворотньому порядку.
 * @returns {Array}
 */
// function createReversedArray() {
//    const myArrayOfArgs = Array.from(arguments);

//    // //version 1
//    // const reversMyArrayOfArgs = [];
//    // let count = 1;
//    // for (let i = 0; i < myArrayOfArgs.length; i++) {
//    //    reversMyArrayOfArgs[i] = myArrayOfArgs[myArrayOfArgs.length - count];
//    //    count++
//    // }

//    // version 2
//    const reversMyArrayOfArgs = myArrayOfArgs.toReversed();
//    return reversMyArrayOfArgs;
// }
// console.log(createReversedArray(12, 85, 37, 4));
// ***************************************************************************************************************************/

/*****************************************************************************************************************************
 *                               Function declaration
 */
// sayHello();
// sayHello();
// function sayHello() {
//    console.log("hello");
// }
// sayHello = 1
// console.log(sayHello);

/**
 *                               Function expression
 * */
// const sayHello = function() {
//    console.log("hello");
// }
// sayHello = 2;
// console.log(sayHello);
//*************************************************************************************************************************** */
