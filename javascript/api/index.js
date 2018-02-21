let express = require("express"),
    app = express(),
    localhost = ""

app.get('/', function (req, res) {
    res.send({message: 'Hello World!'});
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});