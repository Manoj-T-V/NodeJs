import express from "express"
import 
const app = express();

app.get("/",(req,res) =>{
res.render("index.ejs",{daytpye})
});

app.listen(3000, () =>{

});