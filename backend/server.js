import express from "express";


const app = express();

app.use("api/auth")

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})