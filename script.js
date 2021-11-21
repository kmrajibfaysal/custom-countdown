// function arrayOfMultiples(num, length) {
//     const array = [];
//     for (let i = 1; i <= length; i++) {
//         array.push(num * i);
//     }
//     return array;
// }
// console.log(arrayOfMultiples(7, 6));

// function canNest(arr1, arr2) {
//     return Math.max(...arr2) > Math.max(...arr1) && Math.min(...arr1) > Math.min(...arr2);
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log(Math.max([0, 6]));
// console.log([0, 6].map((x) => Math.max(...x)));

// const binary = (decimal) => decimal.toString(2);

// const timeForMilkAndCookies = (date) => date.getMonth() === 11 && date.getDate() === 24;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('edabit');
//     }, 1000);
// });

// function numberSquares(num) {
//     let total = 0;
//     for (let i = 1; i <= num; i++) {
//         total += i ** 2;
//     }
//     return total;
// }

// const numberSquares = (num) => (num > 1 ? num ** 2 + numberSquares(num - 1) : 1);
