const express = require('express')
var app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
app.listen(3000);