function largestNumber(num1, num2, num3) {
    const numbers = [num1, num2, num3]
    const result = numbers.sort((a, b) => a - b)[2];
    
    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16) 


// function largestNumberTwo(num1, num2, num3) {
//     let result;
    
//     if (num1 > num2 && num1 > num3) {
//         result = num1;
//     }
//     else if (num2 > num1 && num2 > num3) {
//         result = num2;
//     } 
//     else if (num3 > num1 && num3 > num2) {
//         result = num3;
//     }
//     console.log(`The largest number is ${result}.`);
// }   

// largestNumberTwo(-3, -5, -22.5)