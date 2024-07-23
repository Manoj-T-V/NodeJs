import mongoose  from "mongoose";

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  const empScheme = new mongoose.Schema({
    Name: String,
    EmpId: Number,
    Department:String,
    Skills:[String],
    Address:{
        Street:String,
        City:String
    }
  });

  const flexibleSchema = new mongoose.Schema({},{strict:false});
  const flexiModel = mongoose.model("flexiModel",flexibleSchema, "FlexiCollection");

  const Emp = mongoose.model('Emp', empScheme);

const createEmp = async() =>{
    const emp = new Emp(
        {
            Name:"Manoj T V",
            EmpId:12345,
            Department:"Software",
            Skills : ["Programming", "Database"],
            Address:{
                Street:"Electronics City",
                City: "Bengaluru"
            }
        }
    );
    const result = emp.save();
    console.log("User saved");
};

const EditEmp = async(empId, updatedFields) => {
    try{
  const result = await Emp.findOneAndUpdate({EmpId:empId},{$set:updatedFields},{new:true, runValidators:true});
  if(result)
  {
    console.log("emp updated", result);

  }
  else{
    console.log("update failed");
  }
}
catch{
    console.log("failed due to exception");
}

}

const Delete = async(empId) => {
    try{
    const result = await Emp.deleteMany({EmpId:empId});
    if(result){
        console.log("Successfully deleted");

    }
    else{
        console.log("delete failed")
    }
    }
    catch(error){
        console.log("delete failed",error);
    }

};

const ReadAll = async(empId) =>{
    try{
    const emps = await Emp.find({EmpId:empId});
    if(emps)
    {
        console.log(emps);
    }
    else{
        console.log("failed to read all");
    }
    }
    catch{
        console.log("exception while reading all");
    }

}
//createEmp();
const updatedFields = {
    Skills: ["new prog", "os"],
    "Address.Street": "electronics city phase 1" 
};
//EditEmp(1234,updatedFields);
//Delete(12345);
ReadAll(12345);


//flexi collection 

const insertflexi = async() =>{
    const dummydata = {
        Name:"Manoj",
        Age: 21,
        DOB:'05-12-2000'
    }
    
}