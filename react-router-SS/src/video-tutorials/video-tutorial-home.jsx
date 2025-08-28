import { Link } from "react-router-dom";

export function VideoTutorialHome(){
    return(
        <div className="container-fluid text-center" >
            <div style={{paddingTop: '100px'}}>
                <Link to="/admin-login" className="btn btn-warning"> Admin Login </Link>
                <Link to="/user-login" className="btn btn-light mx-2"> User Login </Link>
            </div>
        </div>
    )
}