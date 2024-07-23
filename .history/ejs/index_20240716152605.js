import express from "express";
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
res.render("index.ejs",
    {daytype:dattype, advice: advise
}
);
});

app.listen(3000, () =>{
console.log("server is running");
});