const http = require('http');
const app = require('./app');
// We can specify the port from the environment the process is running on, just by telling it in the package.json
// This way, node will check if there is any specified port in the package.json and set it up to 8000 otherwise  
const PORT = process.env.PORT || 8000;
// console.log(PORT);

const server = http.createServer(app);
// The createServer functions take the request listener function, which deal with the request and response, as an argument
// The express object is exactly this, a request listener function, so we can pass this express object as the argument
// This way we can have our code more organised by using a file for the express app (where we can attach middlewares and the like to the app which will ultemately be passed to this server) and this file only for the server functionalities
// Express is basically just a middleware on the top of the node http server
// Otherwise we will have to put the server itself to listen for request with the .on function that we have previously covered in http section
// Recall that this .on function would take care of requests and responses as follows: server.on('request', callback_function) where request is the event we are listening for and the callback function will take the req and res as arguments;

server.listen(PORT, () => 
    console.log(`Listening on port ${PORT}...`)
)
