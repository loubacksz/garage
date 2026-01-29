require('dotenv').config();

const express = require('express');
const app = express()

const jwt = require('jsonwebtoken');

app.use(express.json());
// lets the app use json from the body that gets passed up to it inside  the req

const posts = [
    {
        username: "Kyle",
        title: "Post 1" 
    },  
    {
        username: "Jim",
        title: "Post 2"
    }
];

app.get('/posts', authenticateToken, (req, res) => {
    res.send(posts.filter(post => post.username === req.user.name));
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

// testig jwt
function authenticateToken(req, res, next) {
    // get and verify token and then return user to get('/posts')

    /* 
        the token will come from the request headers in the format bellow

        Bearer TOKEN

        Bearer is a header, the authorization header 
    */
    
    // getting header
    const authHeader = req.headers['authorization'];

    // getting token and check authHeader
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    // verifying token with signature 
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        // passing user to req.user and calling next middleware in the stack
        req.user = user;
        next();
    });
}

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
});
