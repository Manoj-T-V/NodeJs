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
import bodyParser from "body-parser";
const app = express();
const uri = "mongodb+srv://manojtvmtv:DuyrGfMFYmMZ4tGF@cluster0.ezugu8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(3000, () => {
 console.log("App is running");
});
app.use(bodyParser.json());
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    dob: { type: Date, required: true }
   });
const User = mongoose.model('User', userSchema);

mongoose.connect(uri, {
  serverApi: ServerApiVersion.v1
}).then(() => {
  console.log('Mongoose connected to MongoDB');
}).catch(error => {
  console.error('Mongoose connection error:', error);
});

app.get('/', async (req, res) => {
    try {
      console.log('Mongoose connected to MongoDB and user created');
      res.send("Hello from GET with success");
    } catch (error) {
      console.error('Mongoose connection error:', error);
      res.send("Hello from GET with error");
    }
  });

  app.get('/users', async (req, res) => {
    try {
      const users = await User.find(); // Find all users in the collection
      res.json(users); // Send the list of users as JSON
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).send("Error retrieving users");
    }
  });

  app.post('/users', async (req, res) => {
    try {
      const { name, email, age, dob } = req.body;
      
      // Create a new user instance
      const user = new User({
        name,
        email,
        age,
        dob: new Date(dob) // Convert string to Date object
      });
      
      // Save the user to the database
      const result = await user.save();
      console.log('User created:', result);
      res.status(201).json(result); // Return the created user
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(400).send("Error creating user");
    }
  });