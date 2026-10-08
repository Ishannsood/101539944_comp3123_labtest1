function lowerCaseWords(input) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(input)) {
            reject(new Error("Input must be an array"));
            return;
        }

        const result = input
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        resolve(result);
    });
}

// Example input
const mixedArray = [
    "PIZZA",
    10,
    "BURGER",
    true,
    "FRIES",
    "SANDWICH"
];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));