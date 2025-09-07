export default function  wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(next);
    };
};


// step -1 wrapAsync(fn)

// It takes an async function (fn) as an argument.
// This fn is typically an Express route handler 

// step -2 Returns a new function (req, res, next)

// This new function calls the original async function fn with req, res, next.

// step -3 .catch(next)

// If the async function fn throws an error (due to rejected promise, DB error, etc.), it will be caught and passed to next().
// In Express, next(error) sends the error to the error-handling middleware.


// Normally in Express, if you write an async route without try-catch:
// If an error occurs (e.g., DB connection fails), it does NOT automatically go to Express error handler because async functions return promises.