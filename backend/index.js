import express, { response } from "express";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'
import booksRoute from "../backend/routes/booksRoute.js"
const app = express();
import {PORT, mongoDBURL } from "./config.js";
app.use(express.json());
import cors from 'cors';
//Middleware for handling CORS POLICY
//Option 1 : Allow All origins with Default of cors;
// app.use(cors());
// // Option 2: Allow Custom Origins
app.use(
  cors({
    origin:'http://localhost:3000' ,
    methods: ['GET','POST' ,'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],  
  }, 
 {
    origin:'https://mern-stack-book-store-project-backend.vercel.app/' ,
    methods: ['GET','POST' ,'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],  
  },
  
      )
);
app.get('/', (request, response)=>{
  console.log(request);
  return response.status(234).send('Welcome to Bookwarm ')
})

app.use('/books', booksRoute);



mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to database');
    app.listen(PORT, ()=>{
        console.log(`App is listenting to port: ${PORT}`);
    }); 
})
.catch((error)=>{
    console.log(error);
});
