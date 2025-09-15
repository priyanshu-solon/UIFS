interface ICategory{
     CategoryName:string;
}
interface IVendor {
     VendorName:string;
}
interface IProduct extends ICategory, IVendor{
     Name:string;
     readonly Price:number;
     Stock:boolean;
     Rating?:number;
     Qty:number;
     Total():number;
     Print?():void;
}
let product:IProduct = {
     Name: "TV",
     Price: 34000,
     Stock: true,
     Rating: 3.5,
     CategoryName: "Electronics",
     VendorName: "Reliance Digital",
     Qty: 2,
     Total: function(){
          return this.Qty * this.Price;
     },
     Print:function(){
          console.log(`Name=${this.Name}\nPrice=${this.Price}\nRating=${this.Rating}\nTotal=${this.Total()}\nCategory=${this.CategoryName}\nVendor=${this.VendorName}`)
    }

}
product.Name = "Samsung TV";
product.Print();
