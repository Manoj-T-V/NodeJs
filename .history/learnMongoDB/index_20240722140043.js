import mongoose  from "mongoose";

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  const empScheme = new mongoose.Schema({
    name: String,
    empId: Str
  })

