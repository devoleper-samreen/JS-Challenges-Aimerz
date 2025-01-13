//Question 7: Converting a Number to Binary


function convertToBinary(number) {

    if (number === 0) {
        return "0";
    }

    let binary = "";

    while (number > 0) {
        let rem = number % 2;
        binary += rem;

        number = Math.floor(number / 2);

    }

    return binary;
}

// Example usage
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"
