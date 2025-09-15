interface IProduct
{
     Name:string;
     Price:number;
     Qty:number;
     Total():number;
     Print():void;
}
interface ICategory
{
     CategoryName:string;
}
class Product implements IProduct, ICategory
{
     public Name:string = "";
     public Price:number = 0;
     public Qty: number = 0;
     public CategoryName: string = "";
     public Total(): number {
          return this.Qty * this.Price;
     }
     public Print(): void {
          console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
     }
}
let tv = new Product();
tv.Name = "Samsung TV";
tv.Price = 35000;
tv.Qty = 2;
tv.CategoryName = "Electronics";
tv.Print();
