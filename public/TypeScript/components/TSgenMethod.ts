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
class Database
{
    public Connect<T>(connectionString:T){
       for(var key in connectionString){
           console.log(`${key}: ${connectionString[key]}`);
       }
    }
}

let mongo = new Database();
mongo.Connect<IMongoDB>({url: 'mongodb://localhost:27017'});
