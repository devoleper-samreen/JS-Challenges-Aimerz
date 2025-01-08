//Question 5: Calculating the Time Remaining for a Sale


function calculateTimeRemaining(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const remaining = end - start;

    const hours = Math.floor(remaining / 1000 / 60 / 60);
    const minutes = Math.floor(remaining / 1000 * 60 % 60);
    const seconds = Math.floor(remaining / 1000 % 60);

    return { hours, minutes, seconds };


}

// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:01:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }
