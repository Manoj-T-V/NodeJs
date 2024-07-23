import express from "express"
const app = express();

app.listen(3000, (req,res) => {
 console.log("App is running");
 res.send
});

app.get('/', (req,res) => {
res.send("hello form get");
})