import express from "express";
import Connection from "./database/db.js";
import cors from 'cors'
import router from "./routes/route.js";
const app = express();

app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use("/",router)

const PORT = 8000

Connection();

app.listen(PORT,() => {
    console.log(`Your server is running successfully on port ${PORT}`);
})