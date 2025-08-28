import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";
import { ShoppingSearch } from "./shopping-search";
import { ShoppingSearchResults } from "./shopping-search-results";
import { ShoppingPrime } from "./shopping-prime";
import { PrimeLogin } from "./prime-login";

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
             <header className="p-2 mt-2 border border-1 border-dark">
                <div className="text-center">
                    <span className="fs-4 fw-bold">Shopping</span>
                    <div>
                        <Link to="/search"> Search Products </Link>
                        <span className="mx-3"> | </span>
                        <Link to="/prime"> Prime Members </Link>
                        <span className="mx-3"> | </span>
                        <Link to="/login"> Prime Login </Link>
                    </div>
                </div>
              </header>
              <section className="mt-4">
                  <Routes>
                      <Route path="/" element={<ShoppingHome />}  />
                      <Route path="products/:category" element={<ShoppingProducts />}>
                         <Route path="details/:id" element={<ShoppingDetails />} />
                      </Route>
                      <Route path="search" element={<ShoppingSearch />} />
                      <Route path="search-results" element={<ShoppingSearchResults />} />
                      <Route path="prime" element={<ShoppingPrime />} />
                      <Route path="login" element={<PrimeLogin/>} />
                  </Routes>
              </section>
            </BrowserRouter>
        </div>
    )
}