interface IProduct
{
     Name:string;
     Price:number;
}
function FetchData<T>(data:T) : T
{
     return data;    
}
console.log(FetchData<number>(20));
console.log(FetchData<string>("A"));
console.log(FetchData<string[]>(["A", "B"]));
console.log(FetchData<IProduct>({Name: 'TV', Price:50000}));
console.log(FetchData<IProduct[]>([{Name:'Mobile', Price:21000}, {Name:'Watch', Price: 23400}]));
