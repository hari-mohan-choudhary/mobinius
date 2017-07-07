const express = require('express')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/', function (req, res) {
  res.send(JSON.stringify([{id: 1, name: 'php'}, {id: 2, name: 'pythen'}, {id: 3, name: 'java'}]))
})

app.listen(8100, function () {
  console.log(' listening on port 8100!')
})
