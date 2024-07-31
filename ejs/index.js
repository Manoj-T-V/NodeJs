import express from "express"
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/auth.js';
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion} from "mongodb";
import cors from "cors"
import { config } from "dotenv";
config(); //load env variables
const app = express();

app.listen(3000, () => {
 console.log("App is running");
});
app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);
//app.use('/api/auth', authRoutes);
app.use((req, res, next) => {
  console.log('Request body:', req.body);
  next();
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    dob: { type: Date, required: true }
   });
   const Dummy = mongoose.model('Dummy', userSchema);

   mongoose.connect(process.env.MONGODB_URI, {
     serverApi: ServerApiVersion.v1
   }).then(() => {
     console.log('Mongoose connected to MongoDB');
   }).catch(error => {
     console.error('Mongoose connection error:', error);
   });
   
   app.get('/', async (req, res) => {
       try {
         res.send("Hello from GET with success");
       } catch (error) {
         res.send("Hello from GET with error");
       }
     });
   
     app.get('/users', async (req, res) => {
       try {
         const users = await Dummy.find(); // Find all users in the collection
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
         const user = new Dummy({
           name,
           email,
           age,
           dob: new Date(dob) // Convert string to Date object
         });
         
         // Save the user to the database
         const result = await Dummy.save();
         console.log('User created:', result);
         res.status(201).json(result); // Return the created user
       } catch (error) {
         console.error('Error creating user:', error);
         res.status(400).send("Error creating user");
       }
     });