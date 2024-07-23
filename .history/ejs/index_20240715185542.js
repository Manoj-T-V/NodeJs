import express from "express"
import 
const app = express();

app.get("/",(req,res) =>{
res.render("index.ejs",{day})
});

app.listen(3000, () =>{

});