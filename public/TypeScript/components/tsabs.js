var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
        this.Name = "";
        this.Price = 0;
        this.Qty = 1;
    }
    return ProductTemplate;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung TV";
        _this.Price = 450000;
        _this.Qty = 2;
        return _this;
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return Product;
}(ProductTemplate));
var tv = new Product();
tv.Print();
