import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export function ShoppingPrime(){

    let navigate = useNavigate();

    useEffect(()=>{
         if(window.sessionStorage.getItem('uname')===null){
             navigate('/login');
         } else {
             navigate('/prime');
         }
    },[])

    return(
        <div>
            <h3>Prime Members Only</h3>
        </div>
    )
}