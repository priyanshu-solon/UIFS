import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function ShoppingHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategories(response.data);
        })

    },[])

    return(
        <div>
            <h4>Home</h4>
            <ul className="list-unstyled">
              {
                 categories.map(category=>
                    <li className="bg-dark text-white p-2 my-2 w-25" key={category}> <Link className="text-white text-decoration-none" to={`/products/${category}`}>{category.toUpperCase()} </Link> </li>
                 )
              }
            </ul>
        </div>
    )
}