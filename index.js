var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://local.blockchain.com:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/feedback', function (req, res) {
  var jira    = 'https://blockchain.atlassian.net/rest/collectors/1.0/template/feedback/e6ce4d72'
    , headers = { 'X-Atlassian-Token': 'nocheck' };

  request.post({
    url: jira,
    headers: headers,
    form: req.body
  }, function (err, httpResponse, body) {
    res.json({ success: !(err != null) });
  });
});
