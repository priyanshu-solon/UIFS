var product = {
    Id: 1,
    Name: "TV",
    Stock: true,
    Price: 45000
};
product.Name = "Samsung TV";
if ("Price" in product) {
    console.log("Id=".concat(product.Id, "\nName=").concat(product.Name, "\nStock=").concat(product.Stock, "\nPrice=").concat(product.Price));
}
else {
    console.log("Id=".concat(product.Id, "\nName=").concat(product.Name, "\nStock=").concat(product.Stock));
}
