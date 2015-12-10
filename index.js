var express = require('express');
var request = require('request');
var app = express();

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
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
