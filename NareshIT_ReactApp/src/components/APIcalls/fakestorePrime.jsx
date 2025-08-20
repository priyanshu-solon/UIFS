import { createContext, useState } from "react";
import { FakeStoreProductPrime } from "./fakestoreproductPrime";

export const context = createContext(null);

export function FakeStoreHeader() {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [allPro, setAllPro] = useState([]);
  const [inpt, setInpt] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState();

  function getCartItem(e) {
    cartItems.push(e);
    setTotal(total + e.price);
    alert(`${e.title}/n added to cart`);
    setItemCount(cartItems.length);
  }

  function getAllProducts(e) {
    setAllPro(e);
  }

  function handleDeleteItem(item) {
    console.log(cartItems.indexOf(item));
    cartItems.splice(cartItems.indexOf(item), 1);
    setCartItems(cartItems);
    setItemCount(cartItems.length);
    if (cartItems.length == 0) {
      setTotal(0);
    } else {
      setTotal(total - item.price);
    }
  }

  function onSearch() {
    let result = allPro.filter((product) => {
      let str = product.title;

      return str.toLowerCase().includes(inpt);
    });
    setFiltered(result);
  }

  return (
    <div>
      <div className="d-flex justify-content-between border border-2 rounded py-3 shadow shadow-lg align-items-center m-2 px-5">
        <div className="fs-2 fw-bold">FakeStore.</div>
        <div className="input-group w-25">
          <input
            type="taxt"
            className="form-control "
            placeholder="Search your product here...."
            onChange={(e) => setInpt(e.target.value)}
          />
          <button
            onClick={onSearch}
            className="bi bi-search btn btn-warning"
          ></button>
        </div>
        <div>
          <button
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            className="btn btn-warning bi bi-cart4 position-relative"
          >
            <span className="text-white bg-danger rounded-circle badge position-absolute">
              {itemCount}
            </span>
          </button>
          <div className="offcanvas offcanvas-end" id="offcanvas">
            <div className="offcanvas-header">
              <h3>Your Cart</h3>
              <button
                className="btn btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <hr></hr>
            <div className="offcanvas-body">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>View</th>
                    <th>Rate</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <img src={item.image} height="50px" />
                      </td>
                      <td>{item.rate}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteItem(item)}
                          className="btn btn-danger bi bi-trash"
                        ></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>
                      {total.toLocaleString("en-us", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: "2",
                      })}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <section>
        <context.Provider value={filtered}>
          <FakeStoreProductPrime
            setCartItem={getCartItem}
            provideData={getAllProducts}
          />
        </context.Provider>
      </section>
    </div>
  );
}