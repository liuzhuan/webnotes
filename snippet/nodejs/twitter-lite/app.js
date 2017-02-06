var express = require('express');

var app = express.createServer();
app.listen(8000);

var tweets = [];

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var title = 'Chirpie';
    var header = 'Welcome to Chirpie';

    res.render('index', {
        locals: {
            'title': title,
            'header': header,
            'tweets': tweets,
            stylesheets: ['/public/style.css']
        }
    })
});

app.post('/send', express.bodyParser(), function(req, res){
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);

        console.log(req.headers);
        if (acceptsHtml(req.headers['accept'])) {
            res.redirect('/', 302);
        } else {
            res.send({status: 'ok', message: 'Tweet received'});
        }
    } else {
        res.send({status: 'nok', message: 'No tweet received'});
    }
});

app.get('/tweets', function(req, res){
    res.send(tweets);
})

function acceptsHtml(header) {
    var accepts = header.split(',');
    for (var i = 0; i < accepts.length; i++) {
        if (accepts[i] === 'text/html') {
            return true;
        }
    }

    return false;
}