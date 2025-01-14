//Question 8:File Extension validation


// Function to validate the file extension
function validateFileExtension(fileName) {
    const validType = [".jpg", ".jpeg", ".png", ".gif"];

    const isValid = validType.some(ext => fileName.toLowerCase().endsWith(ext));

    console.log(isValid ? "Valid file type. You can upload file" : "Invalid file type. You can not upload .jpg, .jpeg, .png, or .gif file.");

}

// Test the function
validateFileExtension("profile-picture.jpg");
// Valid file type. You can upload the file.
validateFileExtension("document.png");
// Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.







