import express from "express"

const app = express();

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
    const advise = dattype === ""
res.render("index.ejs",
    {daytype:"a weekday", advice: "enjoy"
}
);
});

app.listen(3000, () =>{
console.log("server is running");
});