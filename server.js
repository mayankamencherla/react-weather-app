var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'http'){
        next();
    } else if (PORT !== 3000) {
        var url = `http://${req.hostname}${req.url}`;
        res.redirect(url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});