//Question 1: Calculate Total Price with Tax


function calculateTotalPrice(price, taxRate) {
    // Your code here
    const tax = price * taxRate;
    const totalPrice = price + tax;

    return totalPrice;

}

// Example usage:
console.log(calculateTotalPrice(100, 0.05)); // Output: 105
console.log(calculateTotalPrice(50, 0.1));   // Output: 55
