import { useState } from "react";
import { Navbar } from "../../controlled-components/navbar";

export function FormNew(){

    const [amazonItems] = useState(['Home', 'About', 'Mobiles', 'Fashion', 'Contact']);

    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        for(var item of data){
            console.log(item[1]);
        }
    }

    

    return(
        <div className="container-fluid">
            <header className="mt-3">
                <Navbar theme='bg-warning' brandTitle="Shopper." navItems={['Home', 'Shop', 'Pages', 'Blog', 'Docs']} />
            </header>
            <section>
                <Navbar theme='bg-dark text-white' brandTitle="Amazon" navItems={amazonItems} />
            </section>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" /></dd>
                      <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" /></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}