import express from "express"
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();

try{
    await db.authenticate();
    console.log('database connected...');
} catch (error){
    console.log(Error)
}

app.use(express.json())

app.use(router);



app.listen(5000, ()=> console.log('server running at port 5000'));