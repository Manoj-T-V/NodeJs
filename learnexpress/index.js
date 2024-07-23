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