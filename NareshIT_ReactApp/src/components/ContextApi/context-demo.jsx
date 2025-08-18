import { createContext, useContext, useState } from "react";
let userContext = createContext(null);

export function Level2(){
    let context = useContext(userContext);
    return(
        <div className="bg-danger text-white p-4 m-4">
            <h4>Level-2 - {context} </h4>
        </div>
    )
}

export function Level1({ onChildClick }){

    let context = useContext(userContext);

    function handleButtonClick(){
        var data = {Name:'TV', Rating:4.2};
        onChildClick(data);
    }

    return(
        <div className="bg-warning text-danger p-4 m-4">
            <h4>Level-1 - {context} </h4>
            <button onClick={handleButtonClick} className="btn btn-light"> Send Data to Parent </button>
            <Level2 />
        </div>
    )
}


export function ContextDemo(){
    const [msg, setMsg] = useState('Welcome');
    const [msgFromChild, setMsgFromChild] = useState({Name:null, Rating:0});
    function handleNameChange(e){
        setMsg(e.target.value);
    }
    function handleChildClick(e){
        setMsgFromChild(e);
    }
    return(
        <div className="container-fluid mx-4 bg-dark text-white p-4 mt-3">
            <div>
                <input type="text" onChange={handleNameChange} placeholder="User Name"/>
            </div>
            <h2>Parent Component - {msg}  <span className="mx-3"> {msgFromChild.Name} {msgFromChild.Rating}</span> </h2>
            <userContext.Provider value={msg} >
                <Level1 onChildClick={handleChildClick} />
            </userContext.Provider>
            
        </div>
    )
}