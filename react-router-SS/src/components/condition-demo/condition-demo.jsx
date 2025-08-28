import { useEffect, useState } from "react"

export function ConditionDemo(){

    const [username, setUserName] = useState(null);

    

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleSigninClick(){
        window.sessionStorage.setItem('uname', username);
        location.reload();
        
    }
    function handleSignoutClick(){
        window.sessionStorage.removeItem('uname');
        location.reload();
    }
   
    useEffect(()=>{
       
    },[])

    return(
        <div className="container-fluid">
            <header className="m-2 d-flex align-items-center justify-content-between p-2 border border-1">
                <div className="fs-5 fw-bold">Amazon</div>
                <nav>
                    <span>Home</span>
                    <span className="mx-4">Shop</span>
                    <span>Contact</span>
                </nav>
                <div>
                   {
                     (window.sessionStorage.getItem('uname')===null) 
                     ?
                     <div className="input-group">
                        <input type="text" className="form-control" onChange={handleNameChange} placeholder="User Name" />  <button onClick={handleSigninClick} className="btn btn-danger">Signin</button>
                     </div> 
                     :
                     <div className="fw-bold">
                        {
                            window.sessionStorage.getItem('uname')
                        }
                        <button onClick={handleSignoutClick} className="btn mx-2 btn-danger">Signout</button>
                     </div>
                   }
                </div>
            </header>
        </div>
    )
}