
"use client";

type product = {
    id:number;
    title:string;
}

type Props = {
    products: product[];
}

export default function ProductsList({products}:Props){
    return(
        <div>
            <h4>Products List - Client Component</h4>
            <ol>
                {
                    products.map((product:product)=><li key={product.id}>{product.title}</li>)
                }
            </ol>
        </div>
    )
}