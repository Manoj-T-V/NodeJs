import express from "express"
const app = express();

app.listen(3000, (req,) => {
 console.log("App is running");
});

app.get('/', (req,res) => {
res.send("hello form get");
})