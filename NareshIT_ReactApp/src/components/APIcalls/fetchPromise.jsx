import { useEffect, useState } from "react";

export function FetchPromise(){
    
    const [product, setProduct] = useState({title:'', price:0, image:'', rating:{rate:0, ratings:0, reviews:0}, offers:[]});
    
    function GetProduct(){

          fetch('product.json')
          .then(response=> response.json())
          .then(product=>{
              setProduct(product);
          })

    }


    useEffect(()=>{
        GetProduct();
    },[]);

    return(
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="fs-4">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success rounded"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="mx-4 fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} reviews </span>
                    </div>
                    <div className="mt-3">
                        <div className="h1">{product.price.toLocaleString('en-in', { style:"currency", currency:"INR", minimumFractionDigits:0 })}</div>
                    </div>
                    <div className="mt-3">
                        <h5>Available Offers</h5>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=><li className="bi my-3 text-success bi-tag-fill" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
