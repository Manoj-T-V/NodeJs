import express from "express"

const app = express();

function getdatType()
{
    const day = new Date();
    const today = day.getDay();
    if(today === '0' )
}

app.get("/",(req,res) =>{
res.render("index.ejs",
    {daytype:"a weekday", advice: "enjoy"
}
);
});

app.listen(3000, () =>{
console.log("server is running");
});