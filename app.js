@@ -214,4 +214,58 @@ app.get('/contact', function(req, res){
app.listen(3000);
*/


//EXPRESS ROUTE PARAMS
/*var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
});

app.get('/contact', function(req, res){
  res.send('this is the contact');
});

app.get('/profile/:id', function(req, res){
  res.send('you requested to see a profile with the id of '+ req.params.id);
});
app.listen(3000);
*/


//READING EXCEL SHEET DATA AND CONVERT IT INTO JSON
/*var http = require('http');
var fs = require('fs');
var xlsx = require('xlsx');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
  const myReadStream = xlsx.readFileSync(__dirname + '/Sample.xlsx');
  const sheet_name_list = myReadStream.SheetNames;
  console.log(xlsx.utils.sheet_to_json(myReadStream.Sheets[sheet_name_list[0]]));
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/


//TEMPLATE ENGINES
var express = require('express');
var app = express();

app.set('View engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname +'/contact.html');
});

app.get('/profile/:id', function(req, res){
  res.send('you requested to see a profile with the id of '+ req.params.id);
});
app.listen(3000);
