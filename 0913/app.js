var http = require("http");

// 8000番ポートでHTTPサーバ起動
http.createServer(function(request, response) {

   // レスポンスで返すHTTP header(with HTTP status Content type)
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // レスポンスで返すbody
   response.end('Hello World\n');
}).listen(8000);

// 起動ログ
console.log('Server running at http://127.0.0.1:8000/');

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});