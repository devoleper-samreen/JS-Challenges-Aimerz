//Question 6: Generating a Random Number in a Range


function generateRandomNumber(min, max) {
    const Number = Math.floor(Math.random() * (max - min + 1)) + min;

    return Number;

}

// Example usage
console.log(generateRandomNumber(1, 10)); // 
console.log(generateRandomNumber(5, 15)); // 
