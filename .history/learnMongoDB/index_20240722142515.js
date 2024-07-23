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

  const Emp = mongoose.model('Emp', empScheme);

const createEmp = async() =>{
    const emp = new Emp(
        {
            Name:"Manoj T V",
            EmpId:1234,
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

const EditEmp = async(empId) => {
  const result = Emp.
}

createEmp();