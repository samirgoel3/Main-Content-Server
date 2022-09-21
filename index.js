const express = require('express');
const app = express();
const port = process.env.PORT || 3001 ;



app.use('/', (req, res)=>{
    res.send('Hello , I am Main Content Server, i ill save images in folder and provide link')
})

app.listen(port, ()=>{
    console.log("*****---> App listening on port: "+port)
})