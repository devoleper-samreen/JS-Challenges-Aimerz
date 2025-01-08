//Question 4: Optimizing Price Calculation with Bulk Discount


function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    const total = (price * quantity);

    if (total > discountThreshold) {
        const discount = total * (discountRate / 100);

        return total - discount;
    }

    return total;

}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
