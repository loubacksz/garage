const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

// app.listen() tells the Node.js http module to create an HTTP server and bind it to a specified port on my machine
// this allows the server to accept incoming connections and process requests.
// but I can also create the server myself with - const server = http.createServer(app)
// passing the express app to it as a handler
// app.listen(port, () => {
//     console.log(`example app listening on port ${port}`);
// });

module.exports = app;