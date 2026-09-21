const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:Lv6o7hC7aEfHAaPn@yt-complete-backend.xp9czhe.mongodb.net/halley")

    console.log("Connected to DB");
    
}

module.exports = connectDB