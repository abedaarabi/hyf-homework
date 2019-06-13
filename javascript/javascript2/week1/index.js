//Find the shortest word:



// const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

// function shortestWord(array) {
//   let x = array[0];
//   for (i = 0; i < array.length; i++) {
//     const current = array[i]
//     if (current.length < x.length) {
//       x = current
//     }
//   }
//   return x
// }
// console.log(shortestWord(danishWords));


//Difference between median and average:
// const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000];

// function average(arr) {
//   let x = 0;
//   for (i = 0; i < arr.length; i++) {
//     x = x + arr[i]
//   }
//   var z = x / arr.length
//   return z
// }

// function median(arr) {
//   const ana = arr.length
//   const rest = ana % 2
//   const m = Math.floor(ana / 2)
//   if (rest == 1) {

//     return arr[m]
//   } else {
//     const q = (arr[m - 1] + arr[m]) / 2
//     return q
//   }


// }
// console.log(median(housePrices));
// console.log(average(housePrices))