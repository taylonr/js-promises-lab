const resolvedPromise = () => {
    return new Promise(resolve => {
        resolve("Hello");
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        reject("Failed");
    });
};

module.exports = {
    rejectedPromise,
    resolvedPromise,
}