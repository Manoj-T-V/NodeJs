import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import axios from "axios"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("views"));
function getdatType()
{
    const day = new Date();
    const today = day.getDay();
    if(today === '0' || today === '6')
    {
        return "weekend";
    }
    else{
        return "weekday";
    }
}

app.get("/",(req,res) =>{
    const dattype = getdatType();
    const advise = dattype === "weekday" ? "Work hard" : "enjoy";
res.render("index",
    {daytype:dattype, advice: advise
}
);
});

app.get("/bored", async (req, res) => {
try{
   const response = axios.get("https://bored-api.appbrewery.com/random");
   res.render("bored.ejs", result: re)
}
catch{

}
});

app.listen(3000, () =>{
console.log("server is running");
});