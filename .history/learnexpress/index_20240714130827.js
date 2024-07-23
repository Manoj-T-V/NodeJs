import express from "express"
const app = express();

app.listen(3000, () => {
 console.log("App is running");
});

app.get('/', (req,res) => {
    console.log(req.headers)
res.send("hello form get");
})