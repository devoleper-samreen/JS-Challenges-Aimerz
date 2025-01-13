//  Question 4:Valid email

// Write a javascript program.Where create a variable email and assign the some email address in it.Then create a variable domain.After that check the email contain the domain.If it finds the domain within the email, it returns the position where domain starts.If not, it returns - 1.


function checkGmailDomain(email, domain) {

    return email.indexOf(domain);

}

const email = "user@gmail.com";
const domain = "@gmail.com";

console.log(checkGmailDomain(email, domain));





