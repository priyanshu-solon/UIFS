import { useState } from "react";

export function EventBinding(){

    const [uname, setUname] = useState('John');
    const [msg, setMsg] = useState(null);

    function handleNameChange(e){
        setUname(e.target.value);
    }
    function VerifyName(e){
        if(e.target.value==='David'){
            setMsg('Name Taken - Try another');
        } else {
            setMsg('Name Available');
        }
    }
    
    function handleBlur(){
        setMsg('');
    }


    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onBlur={handleBlur} onKeyUp={VerifyName} onChange={handleNameChange} value={uname} /></dd>
                <dd>{msg}</dd>
            </dl>
            <h2>Hello ! {uname}</h2>
        </div>
    )
}