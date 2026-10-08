function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success: Promise resolved after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error: Promise rejected after 500ms"));
        }, 500);
    });
}

// Handle the resolved promise
resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error.message));

// Handle the rejected promise
rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error.message));