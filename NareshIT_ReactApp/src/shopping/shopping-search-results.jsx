import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export function ShoppingSearchResults(){

    const [params] = new useSearchParams();

    const [products, setProducts] = useState([{id:0, title:null, price:0, description:null, category:null, image:null, rating:{rate:0, count:0}}]);
    

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.get('searchstring')}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h3>Search Results for {params.get('searchstring')}</h3>
            <ol>
                {
                    products.map(product=><li key={product.id}>{product.title}</li>)
                }
            </ol>
        </div>
    )
}