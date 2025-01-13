// Question 5:cleanUp extra spaces

function cleanPhoneNumber(phoneNumber) {

    return phoneNumber.trim();
}

const phoneNumber = "  +1 234 567 890  ";
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  // Output: "+1 234 567 890"





