// import express from "express";
// import path from "path";
// import { fileURLToPath } from 'url';
// import axios from "axios"
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static("views"));
// function getdatType()
// {
//     const day = new Date();
//     const today = day.getDay();
//     if(today === '0' || today === '6')
//     {
//         return "weekend";
//     }
//     else{
//         return "weekday";
//     }
// }

// app.get("/",(req,res) =>{
//     const dattype = getdatType();
//     const advise = dattype === "weekday" ? "Work hard" : "enjoy";
// res.render("index",
//     {daytype:dattype, advice: advise
// }
// );
// });

// app.get("/bored", async (req, res) => {
// try{
//    const response = await axios.get("https://bored-api.appbrewery.com/random");
//    console.log(response.data);
//    res.render("bored.ejs",{ result: String(response.data)});
// }
// catch(error){
//     console.log(error.message);
//     res.status(500).send("failed server error");
// }
// });

// app.listen(3000, () =>{
// console.log("server is running");
// });


import express from "express"
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion} from "mongodb";
const app = express();
const uri = "mongodb+srv://manojtvmtv:DuyrGfMFYmMZ4tGF@cluster0.ezugu8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(3000, () => {
 console.log("App is running");
});

app.get('/', async (req, res) => {
    try {
      await mongoose.connect(uri, {
        serverApi: ServerApiVersion.v1
      });
      console.log('Mongoose connected to MongoDB');
      res.send("Hello from GET with success");
    } catch (error) {
      console.error('Mongoose connection error:', error);
      res.send("Hello from GET with error");
    }
  });