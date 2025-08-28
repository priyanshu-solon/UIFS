import { useState } from "react";
import { DataGrid } from "../../controlled-components/data-grid";
export function ControlledDemo(){

    const [layoutName, setLayoutName] = useState('grid');

    function handleLayoutChange(e){
        setLayoutName(e.target.value);
    }

    return(
        <div className="container-fluid">
           
            <h2>Employee Details 
                <select className="mx-2" onChange={handleLayoutChange}>
                  <option>Select View</option> 
                  <option value='grid'>Grid</option>   
                  <option value='card'>Card</option>
                </select> 
            
            </h2>
            <DataGrid layout={layoutName} caption='Employee Data - Update Aug 2025' fields={['First Name', 'Last Name', 'Designation', 'Salary']} data={[{FirstName:'Raj', LastName:'Kumar', Designation:'Clerk', Salary:45000},{FirstName:'Kiran', LastName:'Kumar', Designation:'Manager', Salary:75000}]} />
            <h2>Product Details</h2>
            <DataGrid layout='card' caption='Products in Offer' fields={['Name', 'Price', 'Rating']} data={[{Name:'TV', Price:24000, Rating:4.2}, {Name:'Mobile', Price:12000, Rating:3.2}, {Name:'Watch', Price:3000, Rating:4.9}]} />
        </div>
    )
}