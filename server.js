
const express = require('express');

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const path= require("path");
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT ? process.env.PORT:8080;

const indexRouter = require('./routes/index.js');
app.use('/',indexRouter)

const adminRouter = require('./routes/theadmins.js');
app.use('/admin',adminRouter)

app.listen(port,()=>{
     console.log("server is running at port", port)
})
