import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { context } from "./fakestorePrime";

export function FakeStoreProductPrime({ setCartItem, provideData }) {
    const [products, setProducts] = useState([]);
    let result = "";
    result = useContext(context);

    function handleAddToCart(product) {
        setCartItem(product);
    }

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
            provideData(res.data);
        });
    }, []);

    return (
        <div className="row m-2 p-2">
            {result == "" ? (
                <div className="col-9 border  border-2 rounded  shadow shadow-lg  d-flex flex-wrap justify-content-around">
                    {products.map((product) => (
                        <div key={product.id} className="card m-4" style={{ width: "300px" }}>
                            <img src={product.image} height={"200px"} />
                            <div className="card-header overflow-auto" style={{ height: "50px" }}>
                                <div className="fs-4">{product.title}</div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        Price : <span className="fw-bold">{product.price}</span>
                                    </li>
                                    <li>
                                        Category :{" "}
                                        <span className="fw-bold">{product.category}</span>
                                    </li>
                                    <li>
                                        <span className="btn btn-success btn-sm bi bi-star-fill">
                                            &nbsp; {product.rating.rate}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button onClick={() => handleAddToCart(product)} className="btn btn-warning">
                                    Add to Cart <span className="bi bi-cart4"></span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="col-9 border  border-2 rounded  shadow shadow-lg  d-flex flex-wrap justify-content-around">
                    {result.map((product) => (
                        <div key={product.id} className="card m-4" style={{ width: "300px" }}>
                            <img src={product.image} height={"200px"} />
                            <div className="card-header overflow-auto" style={{ height: "50px" }}>
                                <div className="fs-4">{product.title}</div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        Price : <span className="fw-bold">{product.price}</span>
                                    </li>
                                    <li>
                                        Category :{" "}
                                        <span className="fw-bold">{product.category}</span>
                                    </li>
                                    <li>
                                        <span className="btn btn-success btn-sm bi bi-star-fill">
                                            &nbsp; {product.rating.rate}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <button onClick={() => handleAddToCart(product)} className="btn btn-warning">
                                    Add to Cart <span className="bi bi-cart4"></span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
