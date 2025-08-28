import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function PrimeLogin(){

    const [username, setUserName] = useState(null);
    let navigate = useNavigate();

    function handleNameChange(e){
        setUserName(e.target.value);
    }
    function handleLoginClick(){
        window.sessionStorage.setItem('uname', username);
        navigate('/prime');
    }

    return(
        <div>
            <h3>Prime User Login</h3>
            <input type="text"  onChange={handleNameChange} />
            <button onClick={handleLoginClick}>Login</button>
        </div>
    )
}