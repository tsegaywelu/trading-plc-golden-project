const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
const bodyParser=require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

const fileUpload = require('express-fileupload');
const port= process.env.port||3000;//if no port in .env file use 3000 
app.use(bodyParser.urlencoded({extended:true}));///used to form data
app.use(bodyParser.json());
app.use(fileUpload());

//telling where is the file to express
app.use('/public',express.static('uploads'));//this displays the image http://localhost:3000/public/up.jpg

const mongoose = require('mongoose');
mongoose.connect(process.env.mongodburl).then(()=>console.log('database connected'))
.catch(err=>console.log(err))
const route=require('./routes/route.js');
app.use(route);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
