
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
     public ConnectionString:T|null = null;
     public Connect():void {
          Object.keys(this.ConnectionString).map(key=>{
               console.log(`${key} : ${this.ConnectionString[key]}`);
          })
     }
}

// Project-1 Database MySQL

let mysql = new Database<IMySQL>();
mysql.ConnectionString = {host: 'localhost', user:'root', password:'1234'};
mysql.Connect();

// Project-2 Database MongoDB

let mongo = new Database<IMongoDB>();
mongo.ConnectionString = {url: 'mongodb://127.0.0.1:27017'};
mongo.Connect();
