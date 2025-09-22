const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const connectionString = "mongodb://localhost:27017";

// API end points

app.get("/users", (req, res)=>{
    mongoClient.connect(connectionString)
    .then(clientobject => {
        var database = clientobject.db("to-do");
        database.collection("users").find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
        })
    })
});

app.get("/appointments/:userid", (req, res)=>{
     mongoClient.connect(connectionString).then(clientobject=>{
          var database = clientobject.db("to-do");
          database.collection("appointments").find({user_id:req.params.userid}).toArray().then(documents=>{
            res.send(documents);
            res.end();
          })
     })
});

app.get("/appointment/:id", (req, res)=>{
     mongoClient.connect(connectionString).then(clientobject=>{
          var database = clientobject.db("to-do");
          database.collection("appointments").findOne({appointment_id:parseInt(req.params.id)}).then(document=>{
             res.send(document);
             res.end();
          })
     })
});

app.post("/register-user",(req, res)=>{
        var user = {
            user_id : req.body.user_id,
            user_name: req.body.user_name,
            password: req.body.password,
            email: req.body.email
        }
        mongoClient.connect(connectionString).then(clientobject=>{
            var database = clientobject.db("to-do");
            database.collection("users").insertOne(user).then(()=>{
                 console.log("User Inserted");
                 res.end();
            })
        })
});

app.post("/add-appointment",(req, res)=>{
        var appointment = {
            appointment_id : parseInt(req.body.appointment_id),
            title: req.body.title,
            description: req.body.description,
            date: new Date(req.body.date),
            user_id: req.body.user_id
        }
        mongoClient.connect(connectionString).then(clientobject=>{
            var database = clientobject.db("to-do");
            database.collection("appointments").insertOne(appointment).then(()=>{
                 console.log("Appointment Inserted");
                 res.end();
            })
        })
});

app.put("/edit-appointment/:id",(req, res)=>{
        var appointment = {
            appointment_id : parseInt(req.body.appointment_id),
            title: req.body.title,
            description: req.body.description,
            date: new Date(req.body.date),
            user_id: req.body.user_id
        }
        mongoClient.connect(connectionString).then(clientobject=>{
            var database = clientobject.db("to-do");
            database.collection("appointments").updateOne({appointment_id:parseInt(req.params.id)},{$set:appointment})
            .then(()=>{
                console.log("Appointment Updated");
                res.end();
            })
        })
});

app.delete("/delete-appointment/:id",(req, res)=>{

        mongoClient.connect(connectionString).then(clientobject=>{
            var database = clientobject.db("to-do");
            database.collection("appointments").deleteOne({appointment_id:parseInt(req.params.id)})
            .then(()=>{
                console.log("Appointment Deleted");
                res.end();
            })
        })
});
app.listen(3000);
console.log(`Server Started http://127.0.0.1:3000`);
