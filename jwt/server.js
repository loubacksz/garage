require('dotenv').config();

const express = require('express');
const app = express()

const jwt = require('jsonwebtoken');

app.use(express.json());
// lets the app use json from the body that gets passed up to it inside  the req

const posts = [
    {
        user: "Kyle",
        title: "Post 1" 
    },  
    {
        user: "Jim",
        title: "Post 2"
    }
];

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/login', (req, res) => {
    // Authenticate User
    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    res.json({
        accessToken: accessToken
    });
});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
});
