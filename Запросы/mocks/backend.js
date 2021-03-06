var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

var books = [
  {
    name: 'Angular'
  },
  {
    name: 'Ember'
  },
  {
    name: 'React'
  }
];

app.get('/books', function (req, res) {
  res.send(books);
});

app.post('/books', function (req, res) {
  var book = {
    name: req.body.name
  };
  books.push(book);
  res.send(book);
});

var server = app.listen(3001, function () {
  console.log('backend started');
});
