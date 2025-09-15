var product = {
    Name: "TV",
    Price: 56000,
    Qty: 2,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
product.Print();
