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
///<reference path="../contracts/ProductContract.ts" />
var Project;
(function (Project) {
    var Templates;
    (function (Templates) {
        var ProductTemplate = /** @class */ (function () {
            function ProductTemplate() {
                this.Name = "";
                this.Price = 0;
                this.Qty = 0;
            }
            return ProductTemplate;
        }());
        Templates.ProductTemplate = ProductTemplate;
    })(Templates = Project.Templates || (Project.Templates = {}));
})(Project || (Project = {}));
///<reference path="../templates/ProductTemplate.ts" />
var ProductTemplate = Project.Templates.ProductTemplate;
var Project;
(function (Project) {
    var Components;
    (function (Components) {
        var ProductComponent = /** @class */ (function (_super) {
            __extends(ProductComponent, _super);
            function ProductComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.Name = "Samsung TV";
                _this.Price = 45000;
                _this.Qty = 2;
                return _this;
            }
            ProductComponent.prototype.Total = function () {
                return this.Qty * this.Price;
            };
            ProductComponent.prototype.Print = function () {
                console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
            };
            return ProductComponent;
        }(ProductTemplate));
        Components.ProductComponent = ProductComponent;
    })(Components = Project.Components || (Project.Components = {}));
})(Project || (Project = {}));
///<reference path="../library/components/ProductComponent.ts" />
var ProductComponent = Project.Components.ProductComponent;
var obj = new ProductComponent();
obj.Print();
