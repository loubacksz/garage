const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set-cookies', (req, res) => {

    //res.setHeader('Set-Cookie', 'newUser=true');

    res.cookie('newUser', false);
    res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true });
    //* still appears on the web-browser *// Local Development (HTTP): If testing on localhost without SSL, secure: true will cause the browser to reject or not store the cookie.

    res.send('take your cookies')
});

app.get('/read-cookies', (req, res) => {

    const cookies = req.cookies;
    console.log(cookies);
    console.log(cookies.newUser);

    res.json(cookies);

});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})