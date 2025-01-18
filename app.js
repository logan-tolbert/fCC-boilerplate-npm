let express = require('express');
const res = require('express/lib/response');
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




