/*------------------- Doubling of number----------------- */

arr  = [1 , 2 , 3, 4, 6, 7, 8, 10];

const oddNumbers = arr.filter(test => test % 2 !== 0);

const newNumbers = oddNumbers.map(test => test * 2);

//output
console.log( 'The doubled numbers are:' + ' ' + newNumbers);