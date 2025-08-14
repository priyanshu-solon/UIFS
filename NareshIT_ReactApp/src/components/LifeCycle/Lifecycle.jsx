
import { useEffect, useState } from "react"

export function UserLogin(){

    useEffect(()=>{
        console.log('Login Component Mounted');
        return()=>{
            console.log('Login Component Unmounted');
        }
    },[])

    return(
        <div>
            <h3>User Login</h3>
        </div>
    )
}

export function UserRegister(){
    useEffect(()=>{
        console.log('Register Component Mounted');
        return()=>{
            console.log('Register Component Unmounted');
        }
    },[])
    return(
        <div>
            <h3>User Register</h3>
        </div>
    )
}


export function LifeCycleDemo(){

    const [component, setComponent] = useState(null);

    function handleLoginClick(){
        setComponent(<UserLogin />);
    }
    function handleRegisterClick(){
        setComponent(<UserRegister/>);
    }

   return(
    <div className="container-fluid">
        <h2>Life Cycle Home</h2>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
        <hr />
        <div>
            {
                component
            }
        </div>
    </div>
   )
}