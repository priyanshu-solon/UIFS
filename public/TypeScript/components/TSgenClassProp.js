var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        var _this = this;
        Object.keys(this.ConnectionString).map(function (key) {
            console.log("".concat(key, " : ").concat(_this.ConnectionString[key]));
        });
    };
    return Database;
}());
// Project-1 Database MySQL
var mysql = new Database();
mysql.ConnectionString = { host: 'localhost', user: 'root', password: '1234' };
mysql.Connect();
// Project-2 Database MongoDB
var mongo = new Database();
mongo.ConnectionString = { url: 'mongodb://127.0.0.1:27017' };
mongo.Connect();
