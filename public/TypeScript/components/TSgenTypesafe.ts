function Sum(a:any,b:any){
     return a + b;
}
function Calculate<T>(a:T, b:T):T 
{
     return Sum(a,b);
}
Calculate<number>(10, 20);
