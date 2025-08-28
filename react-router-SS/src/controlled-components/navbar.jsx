
export function Navbar(props){
    return(
        <nav className={`d-flex ${props.theme} my-2 align-items-center justify-content-between p-2 border border-1 border-secondary`}>
            <div><span className="fs-4 fw-bold">{props.brandTitle}</span></div>
            <div>
                {
                    props.navItems.map(item => <span key={item} className="mx-3"> {item} </span>)
                }
            </div>
            <div>
                <button className="btn btn-danger">Signin</button>
            </div>
        </nav>
    )
}