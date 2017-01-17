var http = require('http');
var faveSong = require('./favorite-song');
var playlist = require('./playlist');
var album = require('./albums');

http.createServer(function(req, res) {
  res.writeHead(200); //sets the response code in the header

  res.write('Song: ' + faveSong() + '\n'); //inserts text into the response

  res.write('Artist: ' + playlist.artists() + '\n');

  res.write('Album: ' + album.title() + '\n');

  res.write('Rating: ' + album.rateIt(5) + '\n');

  res.end(); //ok to send response
}).listen(3000);
