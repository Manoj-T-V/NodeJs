import express from "express"
import 
const app = express();

app.get("/",(req,res) =>{
res.render("index.ejs",{daytype:""})
});

app.listen(3000, () =>{

});