const express = require('express')
const app = express()
const port = 3001

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})