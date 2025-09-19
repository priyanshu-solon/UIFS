
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// API Routes 

app.get("/users", (req, res)=>{
     const users = [
        {UserName:'John123', Password:'john@11'},
        {UserName:'David', Password:'david11'}
    ];
     res.send(users);
     res.end();
});

app.get("/videos", (req, res)=>{
    res.send("sends all videos");
    res.end();
});

app.get("/video/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    res.send(`You are fetching video with ID=${id}`);
    res.end();
});

app.post("/add-video", (req, res)=>{

     // connect with database and send video into DB table.
     res.send("Video Posted");
     res.end();
})
app.listen(4000);
console.log(`Server Started http://127.0.0.1:4000`);
       