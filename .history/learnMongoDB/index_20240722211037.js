import mongoose  from "mongoose";
import { MongoClient, ServerApiVersion} from "mongodb";
const uri = "mongodb+srv://manojtvmtv:Manoj%40123456789@cluster0.on8jbsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      console.log("done");
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    catch(error){
        console.log()
    }
    finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  console.log('Connection string:', mongoose.connection.uri, uri);
  run().catch(console.dir);
  console.log('Connection string:', mongoose.connection.uri);
  


  //mongodb cloud connection ended

// mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

//   const empScheme = new mongoose.Schema({
//     Name: String,
//     EmpId: Number,
//     Department:String,
//     Skills:[String],
//     Address:{
//         Street:String,
//         City:String
//     }
//   });

//   const flexibleSchema = new mongoose.Schema({Email:{type:String, required:true, unique:true}},{strict:false});
//   const flexiModel = mongoose.model("flexiModel",flexibleSchema, "FlexiCollection");

//   const Emp = mongoose.model('Emp', empScheme);

// const createEmp = async() =>{
//     const emp = new Emp(
//         {
//             Name:"Manoj T V",
//             EmpId:12345,
//             Department:"Software",
//             Skills : ["Programming", "Database"],
//             Address:{
//                 Street:"Electronics City",
//                 City: "Bengaluru"
//             }
//         }
//     );
//     const result = emp.save();
//     console.log("User saved");
// };

// const EditEmp = async(empId, updatedFields) => {
//     try{
//   const result = await Emp.findOneAndUpdate({EmpId:empId},{$set:updatedFields},{new:true, runValidators:true});
//   if(result)
//   {
//     console.log("emp updated", result);

//   }
//   else{
//     console.log("update failed");
//   }
// }
// catch{
//     console.log("failed due to exception");
// }

// }

// const Delete = async(empId) => {
//     try{
//     const result = await Emp.deleteMany({EmpId:empId});
//     if(result){
//         console.log("Successfully deleted");

//     }
//     else{
//         console.log("delete failed")
//     }
//     }
//     catch(error){
//         console.log("delete failed",error);
//     }

// };

// const ReadAll = async(empId) =>{
//     try{
//     const emps = await Emp.find({EmpId:empId});
//     if(emps)
//     {
//         console.log(emps);
//     }
//     else{
//         console.log("failed to read all");
//     }
//     }
//     catch{
//         console.log("exception while reading all");
//     }

// }
// //createEmp();
// const updatedFields = {
//     Skills: ["new prog", "os"],
//     "Address.Street": "electronics city phase 1" 
// };
// //EditEmp(1234,updatedFields);
// //Delete(12345);
// //ReadAll(12345);


// //flexi collection 

// const insertflexi = async() =>{
//     try{
//         //await flexiModel.deleteMany();
//         //await flexiModel.collection.createIndex({ Email: 1 }, { unique: true }); making it unique forcefully by applying index
//     const dummydata =new flexiModel({
//         Name:"Manoj T V new",
//         Age: 24,
//         DOB: new Date('2000-12-05'),
//         Email: "manojtvmtv@gmails.com",
//         Preferences: {
//             Notifications: {
//                 Email: { type: Boolean, default: true },
//                 SMS: { type: Boolean, default: false }
//             }
//         }

// });
//     const result = await dummydata.save()
//     if(result)console.log(result);
//     else console.log("failes");
// }
// catch(error){
//     console.log("exception", error);
// }
// }

// //insertflexi();