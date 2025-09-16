interface IMongoDB
{
     url:string;
}
interface IMySQL
{
     host:string;
     user:string;
     password:string;
}

class Database<T>
{
    constructor(connectionString:T){
       for(var key in connectionString){
           console.log(`${key}: ${connectionString[key]}`);
       }
    }
}

let mongo = new Database<IMongoDB>({url:"mongodb://localhost:27017"});
let mysql = new Database<IMySQL>({host:'localhost', user:'root', password:'123'});
