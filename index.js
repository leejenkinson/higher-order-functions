const numbers = [1,2,3,4,5,6,7,8,9,10];

// return sum of array
const sum = numbers.reduce((accumulator, next) =>
    accumulator + next);

console.log(sum);

// return all even numbers in array
const even = numbers.filter(n => {
    return n % 2 == 0;
});

console.log(even);

//return all odd numbers in array
const odd = numbers.filter(n => {
    return n%2 != 0;
});

console.log(odd);

//return max number in array
const maximum = Math.max(...numbers);

console.log(maximum);

//return max number using reduce function
const minVersion2 = numbers.reduce((acc, next) => Math.min(acc, next));

//return min number in array
const minimum = Math.min(...numbers);

console.log(minimum);

// return min number using reduce function
const minVersion2 = numbers.reduce((acc, next) => Math.min(acc, next));

//return square of each number in array
const squareArray = numbers.map (n => {
    return n**2;
});
console.log(squareArray);

// show all odd numbers from the square array
const oddSqaure = squareArray.filter(n => {
    return n%2 != 0;
});

console.log(oddSquare);

// return min value from odd squares
const minOddSquare = Math.min(...oddSqaure);

console.log(minOddSquare);

const squareArray = numbers.map (n =>
     n**2).filter(n =>
         n%2 != 0).reduce((acc, next) => Math.min(acc, next));
