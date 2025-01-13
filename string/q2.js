//Question 2:Count word Occurance

function countOccurrences(str, word) {
    //let count = 0;

    const words = str.split(" ");

    const count = words.filter((w) => w.toString() === word.toString()
    ).length

    return count + 1;

}

const comment = "This product is great. The quality is great and it's a great value.";

const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);

console.log(`The word ${wordToCount} appears ${count} times in the comment.`);


