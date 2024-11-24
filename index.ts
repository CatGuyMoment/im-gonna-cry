const express = require('express');

const app = express();

app.listen(80,() => {
    console.log('the voices are getting louder..!')



})

app.get('/',(req,res) => {
    res.send('i wonder if this is html......')


})
