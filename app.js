const express = require('express');
const app = express();

app.get((req,res)=>{
    res.send('<h1>This is Node , This is a Docker inside from a Node js...</h1>')
});

app.listen(8000,()=>{
    console.log('listening the port 8K...')
});