var Product = /** @class */ (function () {
    function Product() {
        this.Name = "";
        this.Price = 0;
        this.Qty = 0;
        this.CategoryName = "";
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return Product;
}());
var tv = new Product();
tv.Name = "Samsung TV";
tv.Price = 35000;
tv.Qty = 2;
tv.CategoryName = "Electronics";
tv.Print();
