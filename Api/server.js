import DbConnect from './DbConnection/dbConnect.js';
DbConnect();
import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import router from './Routes/customerRoutes.js';
dotenv.config()

const app = express();
const port = process.env.PORT || 9000;
app.use(cors())
app.use(express.json());
app.use('/', router);


app.listen(port, () => {
    console.log(`your application is running on ${port}`)
})