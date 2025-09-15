let product: {Name:string, Price:number, Qty:number, Total?():number, Print():void} = {
    Name: "TV",
    Price: 56000,
    Qty: 2,
    Total: function(){
        return this.Qty * this.Price;
    },
    Print: function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}
product.Print();
