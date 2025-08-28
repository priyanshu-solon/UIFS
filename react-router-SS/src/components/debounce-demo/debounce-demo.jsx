import { useRef, useState } from "react"


export function DebounceDemo(){

    const [msg, setMsg] = useState(null);

    let thread = useRef(null);

    function v1(){
        setMsg('Volume Increased by 20%');
    }
    function v2(){
        setMsg('Volume Increased by 60%');
    }
    function v3(){
        setMsg('Volume Full');
    }
    
    function handleButtonClick(){
        setTimeout(v1, 4000);
        thread.current = setTimeout(v2, 8000);
        setTimeout(v3,10000);
    }
    function handleCancelClick(){
        clearTimeout(thread.current);
    }

    return(
        <div className="container-fluid">
            <div className="mt-3">
                <button onClick={handleButtonClick} className="bi bi-volume-up btn btn-success"></button>
                <button onClick={handleCancelClick} className="btn btn-danger mx-2">Cancel V2</button>
            </div> 
            <h2>{msg}</h2>
        </div>
    )
}