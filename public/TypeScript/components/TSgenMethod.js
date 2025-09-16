var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Connect = function (connectionString) {
        for (var key in connectionString) {
            console.log("".concat(key, ": ").concat(connectionString[key]));
        }
    };
    return Database;
}());
var mongo = new Database();
mongo.Connect({ url: 'mongodb://localhost:27017' });
