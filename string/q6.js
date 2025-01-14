//Question 6:Convert URLs to Links


function convertUrlsToLinks(text) {
    const urlPattern = /https?:\/\/\S+/g;
    return text.replace(urlPattern, '<a href="$&">$&</a>');
}

let updatedText = convertUrlsToLinks("Visit our website at http://example.com for more information. Also, check out https://google.com for other resources.");
console.log(updatedText);






