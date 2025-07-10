console.log("Welcome to Node JS");
//////////////////////////httpmodule////////////////////////////
//////////////////////////////////////////////////////

///////////////////////////creates a server ,Prints a message and ends//////////////////////////////////

// const http = require("http");

//  http.createServer(function(request, response){
//        response.writeHead(200,{'content-type':'text/plain'});
//        response.write("Welcome to Node Server");
//        response.end();
//  }).listen(4040);

//  console.log(`Server Started : http://127.0.0.1:4040`);

////////////////////////////prints all http status codes/////////////////////////////////

//  const http = require("http");

//  Object.keys(http.STATUS_CODES).map(key=>{
//       console.log(`${key}: ${http.STATUS_CODES[key]}`);
//  })

//////////////////////////ptints a html message with correct mime type//////////////////////////////////

//   const http = require("http");

//  http.createServer((req, res)=>{

//       res.writeHead(200, { 'content-type': 'text/html' });
//       res.write('<h1>Welcome to Node JS</h1>');
//       res.end();
//  }).listen(5000);
//  console.log(`Server Started http://127.0.0.1:5000`);

////////////////////////////prints a json type data////////////////////////////////

//  const http = require("http");

//  http.createServer((req, res)=>{

//       res.writeHead(200, { 'content-type': 'application/json' });
//       res.write(JSON.stringify([{Name:'TV', Price:45000},{Name:'Mobile', Price:12000}]));
//       res.end();
//  }).listen(5000);

//  console.log(`Server Started http://127.0.0.1:5000`);

//////////////////////////osmodule///////////////////////////////
/////////////////////////////////////////////////////////


//////////////////////////prints os specifications///////////////////////////////

// const os = require("os");

// console.log(`Server OS : ${os.platform()}\nServer IP: ${os.hostname()}\nFree Memory : ${os.freemem()}\nProcessor : ${os.cpus()[0].model}`);

///////////////////////////process module///////////////////////////
//////////////////////////////////////////////////////

// const process = require("process");

//     process.env;
//     process.getuid;

////////////////////////////path module//////////////////////////
//////////////////////////////////////////////////////

///////////////////////////handles path///////////////////////////

// const path = require("path");

// var uploaded_file = "D:\\images\\photo.jpg";

// if(path.extname(uploaded_file)===".jpg"){
//      console.log(`File Uploaded Successfully..\nUploaded from ${path.dirname(uploaded_file)} folder`);
// } else {
//      console.log(`Invalid Format - You can upload only JPG files`);
// }


////////////////////////////file stream//////////////////////////
//////////////////////////////////////////////////////

///////////////////////////prints or handles files on server side///////////////////////////

// const fs = require("fs");

// console.log(`File Requested`);

// let data = fs.readFileSync('./NareshIT_Demo_Class_Video_UIFS.txt');
// console.log(data.toString());

// console.log(`File Read Complete`);

//////////////////////////////events////////////////////////////
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

// const events = require("events");

// let event = new events.EventEmitter();

// let handleSend = function(){
//     console.log(`Message Sent Successfully..`);
// }


// event.addListener("send", handleSend).emit("send");


///////////////////////////events/////////////////////////////////
// const events = require("events");

// let event = new events.EventEmitter();

// let handleSend = function(){
//      console.log(`Message Sent Successfully..`);
// }

// let handleGet = function(){
//      console.log([{Name:'TV', Price:2300}, {Name:'Mobile', Price:1200}]);
// }

// event.on("send", handleSend);
// event.on("get", handleGet);
// event.emit("send");
// event.emit("get");

/////////////////////CACHING//////////////////////////////////

// const nodeCache = require("node-cache");

// let cache = new nodeCache();

// cache.set('product', {Name:'tv', Price:23300}, 20);
// var now = new Date();

// if(cache.get('product')){
//     console.log(cache.get('product'));
//     console.log(now.toLocaleTimeString());
// } else {
//     console.log(`Unable to find the data - Cache deleted`);
// }

// function GetData(){
//     if(cache.get('product')){
//     console.log(cache.get('product'));
//     console.log(now.toLocaleTimeString());
//     } else {
//         console.log(`Unable to find the data - Cache deleted`);
//     }
// }

// setTimeout(GetData,25000);

///////////////////////Database Drivers//////////////////////////
///////////////////////MongoDB Drivers//////////////////////////

// const mongoClient = require("mongodb").MongoClient;

// mongoClient.connect("mongodb://127.0.0.1:27017").then(()=>{
//     console.log('Connected Successfully..');
// })
// .catch(err=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Request End");
// })



///////////////////////express//////////////////////////////////
///////////////////////api//////////////////////////////////