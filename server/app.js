// Adding Express Js 
const express = require("express");
// Install cookie-parser and import after expess 
const cookieParser = require('cookie-parser')
const app = express();
// use cookie parser after using app 
app.use(cookieParser())

// DOTENV File 
const dotenv = require("dotenv");
dotenv.config({path: './config.env'})
const PORT = process.env.PORT;

// Add DB File
require('./db/conn');
// To Convert JSON Data In Object
app.use(express.json());

// Link Router Files
app.use(require('./router/auth'))

// Listen App 
app.listen(PORT,()=>{
    console.log(`Port is running at http://localhost:${PORT}`);
})