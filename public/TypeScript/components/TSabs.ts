
interface ProductContract
{
     Name:string;
     Price:number;
     Qty:number;
     Total():number;
     Print():void;
}
abstract class ProductTemplate implements ProductContract
{
     public Name: string = "";
     public Price: number = 0;
     public Qty: number = 1;
     abstract Total(): number;
     abstract Print(): void;
}
class Product extends ProductTemplate
{
     Name = "Samsung TV";
     Price = 450000;
     Qty = 2;
     Total() {
          return this.Qty * this.Price
     }
     Print(){
          console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`)
     }
}

let tv = new Product();
tv.Print();