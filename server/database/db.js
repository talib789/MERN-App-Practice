import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

 const Connection = () => {
    mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true})

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    })

    mongoose.connection.on("disconnected",() => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on("error",() => {
        console.log("Error while connection with the database",error.message);
    })
}

export default Connection;




//33QvfpHxGvwz9CJI