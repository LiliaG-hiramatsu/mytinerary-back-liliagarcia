import mongoose from "mongoose";

let url_link = process.env.MONGO;

mongoose.connect(url_link)
    .then(() => console.log('database connected'))
    .catch(error => console.log(error))