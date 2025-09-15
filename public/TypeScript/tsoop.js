var product = {
    Name: "TV",
    Price: 34000,
    Stock: true,
    Rating: 3.5,
    CategoryName: "Electronics",
    VendorName: "Reliance Digital",
    Qty: 2,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nRating=").concat(this.Rating, "\nTotal=").concat(this.Total(), "\nCategory=").concat(this.CategoryName, "\nVendor=").concat(this.VendorName));
    }
};
product.Name = "Samsung TV";
product.Print();
