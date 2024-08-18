// 1-savol

// let str = "Salom Najot"

// function func(str) {
//     let kottaHarif = 0;
//     let kichkinaHarif = 0;

//     for (let i = 0; i < str.length; i++) {
//         let harif = str[i];
//         if (harif >= "A" && harif <= "Z") {
//             kottaHarif++;
//         } else if (harif >= "a" && harif <= "z") {
//             kichkinaHarif++;
//         }
//     }

//     return [kottaHarif, kichkinaHarif];
// }

// console.log(func(str));

// 2-savol
// let str = "salom nima gaplar Palindrom bu Palindrom"
// let arr = str.split(" ")

// function func(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != "Palindrom") {
//             newArr.push(arr[i])
//         }

//     }

//     return newArr
// }

// let natija = func(arr)
// console.log(natija);


// 3-savol

// let sonlar = [1, 2, 3, 4, 5, 3, 2, 1, 6, 7, 8, 9, 2];

// function func(sonlar) {
//     let newArr = [];
//     sonlar.filter(function (value, index) {
//         if (sonlar.indexOf(value) !== index) {
//             if (!newArr.includes(value)) {
//                 newArr.push(value);
//             }
//         }
//     });

//     return newArr;
// }

// console.log(func(sonlar)); 


// 4-savol

// let matn = "Salom";
// function func(matn) {
//     let str = '';

//     for (let i = 0; i < matn.length; i++) {
//         let asc = matn.charCodeAt(i); 
//         let strIkki = asc.toString(2); 
//         str += strIkki + ' '; 
//     }

//     return str.trim(); 
// }

// console.log(func(matn));


// 5-savol

// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(6));


// 6-savol

// let num = 123;
// let arr = num.toString().split("");

// function func(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] * 1

//     }

//     return sum
// }

// let natija = func(arr);
// console.log(natija);


// 7-savol

// ????

// 8-savol

// let str = "salom nima"
// let arr = str.split("")

// function func(arr) {
//     let newArr = []

//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }

//     return newArr.join("")
// }

// let natija = func(arr)
// console.log(natija);


// 9-savol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res = arr.filter(function (value) {
//     return value % 2 == 1
// })

// console.log(res);

// 10-savol

// ????





















