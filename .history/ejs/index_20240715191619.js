import express from "express"

const app = express();

function getdatType()

app.get("/",(req,res) =>{
res.render("index.ejs",
    {daytype:"a weekday", advice: "enjoy"
}
);
});

app.listen(3000, () =>{
console.log("server is running");
});