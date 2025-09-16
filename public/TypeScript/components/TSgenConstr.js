var Database = /** @class */ (function () {
    function Database(connectionString) {
        for (var key in connectionString) {
            console.log("".concat(key, ": ").concat(connectionString[key]));
        }
    }
    return Database;
}());
var mongo = new Database({ url: "mongodb://localhost:27017" });
var mysql = new Database({ host: 'localhost', user: 'root', password: '123' });
