const express = require("express")
const cors = require('cors')
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bookRoute = require("./route/book.route")
const userRoute=require("./route/user.route")
app.use(express.json())


app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 3000
const URI = process.env.mongoURI

console.log("PORT from .env:", process.env.PORT);

try {
    mongoose.connect(URI,{
        useNewUrlParser : true ,
        useUnifiedTopology : true
    })
    console.log ("Mobgodb Connected")
    
} catch (error) {
    console.log("Error: ",error)
}


app.get("/",(req,res)=>{
    res.send("Hello World 2");
});


//Defining Routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log(`Server hosted at port ${PORT} `);
    
})