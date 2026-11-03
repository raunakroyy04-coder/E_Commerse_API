import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js';
import productRouter from './Routes/product.js';
import cartRouter from  './Routes/cart.js';


import {config} from 'dotenv';


const app=express();



app.use(bodyParser.json());

//env setup
config({path:".env"});

//user router
app.use('/api/user',userRouter);

//product router
app.use('/api/product',productRouter);


//cart router
app.use('/api/cart',cartRouter);

app.get("/", (req, res) => {
    res.json({
        message: "This is home route working"
    });
});

mongoose.connect(process.env.MONGO_URI,{
    dbName:"Nodejs_Mongodb_E_COMMERSE_API"
}
).then(()=>console.log("Mongodb is connected")).catch((err)=>console.log(err));


const port=process.env.PORT;
app.listen(7777, () => {
    console.log(`Server i Running ${port}`);
});
