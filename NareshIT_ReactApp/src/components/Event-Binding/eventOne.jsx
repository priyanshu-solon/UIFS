import { useState } from "react";

export function EventBinding() {
  const [msg, setMsg] = useState(null);
  const [msg2, setMsg2] = useState(null);

  function handleInsertClick(e) {
    setMsg("Inserted Successfully open terminal for more data");
    console.log(
      `Button Value : ${e.target.value}\nButton Id : ${e.target.id}\nX Position : ${e.clientX}`
    );
  }

  function handleInsertClick2(e, ...product) {
    setMsg2("Inserted Successfully open terminal for more data");
    let [id, name, stock, cities, rating] = product;
    console.log(
      `Id=${id}\nName=${name}\nStock=${stock}\nCities=${cities}\nRating=${rating.Rate}`
    );
    console.log(`Button Value=${e.target.value}\nX Position=${e.clientX}`);
  }

    function NavClick(){
        alert('Navbar Clicked - Navigate to Home');
    }
    function SearchClick(e){
        e.stopPropagation();
        alert('Search Clicked - Shows search results');
    }

    function SubmitClick(e){
        e.preventDefault();
        alert('Form Submitted');
    }

  return (
    <div className="container-fluid m-3">
      <button className="btn btn-primary" value="Insert" id="btnInsert" onClick={handleInsertClick}>Insert</button>
      <p>{msg}</p>

      <button className="btn btn-primary" value="Insert" id="btnInsert" onClick={(event) => handleInsertClick2(event, 1, "TV", true, ["Delhi", "Hyd"], { Rate: 4.2,})}>Insert</button>
      <p>{msg2}</p>

      <nav onClick={NavClick} className="p-2 border border-2 border-dark m-4">
        <h2>Amazon</h2>
        <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>
      </nav>
      <section className="m-4">
        <form onSubmit={SubmitClick}>
          <h3>User Name</h3>
          <input type="text" name="User" /> <button type="submit">Login</button> 
        </form>
      </section>
    </div>
  );
}
