
export function ShoppingSearch(){
    return(
        <div className="text-center">
            <div className="fs-5">Search Products</div>
            <form action='/search-results'>
                <input type="text" name="searchstring" size="40"/>
                <br/><br/>
                <button className="btn btn-primary">Search</button>
            </form>
        </div>
    )
}