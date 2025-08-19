import { useReducer } from "react"

let initialValues = {
    usersCount: 0
}

function reducer(state, action){
    switch(action.type){
        case "join": 
        return {usersCount: state.usersCount + 1}
        case "exit": 
        return {usersCount: state.usersCount - 1}
    }
}

export function ReducerDemo(){

    const [state, dispatch] = useReducer(reducer, initialValues);

    function handleJoinClick(){
        dispatch({type: "join"});
    }
    function handleExitClick(){
        dispatch({type: "exit"});
    }

    return(
        <div className="container-fluid">
            <h2>Live Users [{state.usersCount}]</h2>
            <iframe width="500" src="https://www.youtube.com/embed/NJVQA10RPuA" height="400"></iframe>
            <div className="mt-2">
                <button onClick={handleJoinClick} className="btn btn-primary bi bi-door-open"> Join </button>
                <button onClick={handleExitClick} className="btn btn-warning mx-2 bi bi-door-closed "> Exit </button>
            </div>
        </div>
    )
}