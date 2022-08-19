const express= require("express")
const app= express();
const connect= require("./configs/db");
const cors= require("cors");

app.use(express.json());
app.use(cors());


app.listen(7777, async()=>{
     try {
         await connect();
         console.log("Listening port number 7777");
        
     } catch (error) {
        console.log(error)
     }
})