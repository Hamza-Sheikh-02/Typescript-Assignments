// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.

async function fetchGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Hamza!");
        }, 2000);
    });
}

fetchGreeting().then((greeting) => {
    console.log(greeting);
});


// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

async function simulateTask(): Promise<void> {
    console.log("Task started");
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    console.log("Task completed");
}

simulateTask();


// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    })
}

fetchData().then((message) => {
    console.log(message);
});


// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

async function fetchWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}

fetchWithError().then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});


// Question # 5
// Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.

async function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}

async function executeSequentially(): Promise<void> {
    const data = await fetchData();
    console.log(data);
    const processedData = await processData(data);
    console.log(processedData);
}

executeSequentially();
