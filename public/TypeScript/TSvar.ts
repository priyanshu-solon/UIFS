
           
let product:{
    Id:number, Name:string,
    Stock:boolean, Price?:number} = {
    Id : 1, 
    Name: "TV",
    Stock: true,
    Price: 45000
}
product.Name = "Samsung TV";

if("Price" in product){
    console.log(`Id=${product.Id}\nName=${product.Name}\nStock=${product.Stock}\nPrice=${product.Price}`);
}
else {
    console.log(`Id=${product.Id}\nName=${product.Name}\nStock=${product.Stock}`);
}
