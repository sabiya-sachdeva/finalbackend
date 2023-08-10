const express=require('express');

const cors=require('cors');

const mongoose=require('mongoose')
const bookRouter=require('./routes/book')


//const uri="mongodb://127.0.0.1:27017/BookList";
const uri="mongodb+srv://user:123@cluster0.24chgkl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri,{
    useNewUrlParser:true
})
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("database connected");
})

const app=express();
app.use(cors());

app.use(express.json())

app.use('/book',bookRouter);


app.listen(5000,()=>{
    console.log('server is running on port 5000')
})