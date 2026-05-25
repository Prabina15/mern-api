import mongoose from "mongoose";
import config from "./config.js";

function connectDB() {
     mongoose
    .connect(config.mongodbUrl)
    .then(()=>{
    console.log("MongoDb connected successfuly.");
    })
    .catch((error) => {
        console.log(error);
    });

}


export default connectDB;