
import ProductsList from '../components/products-list';

type product = {
    id:number;
    title:string;
}

export default async function ProductHome(){

    const res = await fetch('https://fakestoreapi.com/products');
    const products:product[] = await res.json();

    return(
        <div>
            <h2>Product Home - Server Component</h2>
            <ProductsList products={products} />
        </div>
  )

} 
