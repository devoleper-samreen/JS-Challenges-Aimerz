//Question 3:Keyword check


function isProductMatch(query, description) {

    if (description.toLowerCase().includes(query.toLowerCase())) {
        console.log("yes keyword match");
    } else {
        console.log("Sorry, keyword not match");

    }
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);





