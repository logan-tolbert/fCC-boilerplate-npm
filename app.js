let express = require('express');
const res = require('express/lib/response');
require('dotenv').config();
let app = express();
const viewsDir = __dirname + '/views/index.html';
const publicDir = __dirname + '/public';

// app.get("/", (req, res)=>{
//     res.send('Hello Express');
// })

app.use('/public', express.static(publicDir));

app.get("/", (req,res)=>{
    res.sendFile(viewsDir);
})

app.get("/json", (reg,res)=>{
    res.json(
        process.env.MESSAGE_STYLE === 'uppercase' ? 
        {"message": "HELLO JSON"} : {"message": "Hello json"}
    );
})









