import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export function ShoppingDetails(){

    const [product, setProduct] = useState({id:0, title:null, description:null, price:0, category:0, image:0, rating:{rate:0, count:0}});

    let params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })

    },[params.id])

    return(
        <div>
            <h4>Details</h4>
            <dl>
                <img src={product.image} width="200" height="200" />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
        
        </div>
    )
}