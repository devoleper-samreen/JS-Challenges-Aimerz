//Question 9:Case-Insensitive Search


function searchProducts(products, searchQuery) {
    return products.filter(product => product.toLowerCase() === searchQuery.toLowerCase());
}

// Example usage
let products = ["Apple", "banana", "Orange", "grapes", "APPLE"];
let searchQuery = "BANANA";

let searchResult = searchProducts(products, searchQuery);
console.log(searchResult);  // ["Apple", "APPLE"]







