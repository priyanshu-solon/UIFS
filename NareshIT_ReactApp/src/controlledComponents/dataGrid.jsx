export function DataGrid(props){
    return(
        <table className="table table-hover caption-top">
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        props.fields.map(field=>
                        <th key={field}>{field} 
                          <div className="dropdown d-inline">
                             <button data-bs-toggle="dropdown" className="bi bi-three-dots-vertical btn"></button> 
                             <ul className="dropdown-menu">
                                <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-down"></span> Sort Ascending </span> </li>
                                <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-up"></span> Sort Descending </span> </li>
                                <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-flask"></span> Filter </span> </li>
                             </ul>
                          </div>
                        </th>)
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index)=>
                     <tr key={index}>
                        {
                            Object.keys(item).map(key => <td key={key}> {item[key]} </td>)
                        }
                        <td>
                            <button className="btn btn-warning bi bi-pen-fill"></button>
                            <button className="btn btn-danger bi bi-trash mx-2"></button>
                        </td>
                     </tr>
                    )
                }
            </tbody>
        </table>
    )
}