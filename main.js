/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16-misol //////////////////////////////////////////////////////////////////////////////
// function getInitialOdds(n) {
//   const result = [];
//   let oddNumber = 1;
//   for (let i = 0; i < n; i++) {
//     result.push(oddNumber);
//     oddNumber += 2;
//   }
//   return result;
// }

// const n = 3;
// console.log(getInitialOdds(n));
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//13- misol  /////////////////////////////////////////////////////////////////////////////////////////////
// function isPalindrome(params) {
//   let type = typeof params;
//   console.log(type)
//   if(type === "number" ){
//     let arr = Array.from(params.toString(),Number().reverse())
//     let nwe_number = Number(arr.join(""))
//     if(params === nwe_number){
//         return `pakindrome`
//     }else{
//         return `palindrome emas`
//     }
//   } else if( type === `string`){
//     let arr = params.split("").reverse()
//     let new_str = arr.join("")
//     if(params === new_str){
//         return `pakindrome`
//     }else{
//         return `palindrome emas`
//     }
//   }
// }
// isPalindrome(11)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15 -misol /////////////////////////////////////////////////////////////////////////////////////////////
// let str = "hello ";
// let new_str = str.toLowerCase().trim();
// let count = 0;
// let letters = ["a", " o ", "e", "u", "i", "o'"];
// for (let i = 0; i < new_str.length; i++) {
//   for (let j = 0; j < letters.length; j++) {
//     if (new_str[i] === letters[j]) {
//       count++;
//     }
//   }
// }
// console.log(count)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 14 -misol ///////////////////////////////////////////////////////////////////////////////////////////////
// const obj = { a: 1, b: 22 };
// const valueSum = Object.values(obj).reduce((acc, val) => acc + val, 0);
// const digitSum = valueSum
//   .toString()
//   .split("")
//   .reduce((acc, digit) => acc + parseInt(digit), 0);

// console.log("Qiymatlar yig'indisi:", valueSum);
// console.log("Qiymatlar raqamlar yig'indisi:", digitSum);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12 - misol ///////////////////////////////////////////////////////////////////////////////////////////////
// const sumOfDigitsArray = (...numbers) => {
//     const sum = numbers.reduce((acc, number) => acc + number, 0);
//     const sumStr = sum.toString();
//     const result = [...sumStr].map((digit) => parseInt(digit));

//     return result;
//   };

//   const numbers = [1, 22, 3];

//   console.log(sumOfDigitsArray(...numbers));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   11-misol ///////////////////////////////////////////////////////////////////////////////////////////////////////
// const sumDigits = (num) => {
//     let sum = 0;
//     while (num) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   };
//   const userInput = prompt("Istalgan sonni kiriting:");
//   const number = parseInt(userInput);
//   const result = sumDigits(number);
//   console.log(`Kiritilgan sonning raqamlari yig'indisi: ${result}`);
