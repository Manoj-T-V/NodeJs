import express from "express"
import 
const app = express();

app.get("/",(req,res) =>{
res.render("index.ejs",{daytype:"a"})
});

app.listen(3000, () =>{

});