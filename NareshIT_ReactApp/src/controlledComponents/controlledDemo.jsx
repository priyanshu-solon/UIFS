import { DataGrid } from "./dataGrid";

export function ControlledDemo(){
    return(
        <div className="container-fluid">
            <h2>Employee Details</h2>
            <DataGrid  caption='Employee Data - Update Aug 2025' fields={['First Name', 'Last Name', 'Designation', 'Salary']} data={[{FirstName:'Raj', LastName:'Kumar', Designation:'Clerk', Salary:45000},{FirstName:'Kiran', LastName:'Kumar', Designation:'Manager', Salary:75000}]} />
            <h2>Product Details</h2>
            <DataGrid caption='Products in Offer' fields={['Name', 'Price', 'Rating']} data={[{Name:'TV', Price:24000, Rating:4.2}, {Name:'Mobile', Price:12000, Rating:3.2}, {Name:'Watch', Price:3000, Rating:4.9}]} />
        </div>
    )
}