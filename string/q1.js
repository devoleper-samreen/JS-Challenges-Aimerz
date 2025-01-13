//Question 1:Valid Password (minimum 8 character)

const password = 'abcdefgi';

function isValidPassword(password) {
    const len = password.length;

    return len >= 8 ? true : false;
}

console.log(isValidPassword(password));
// Returns false as the length of password is less than 8 characters




