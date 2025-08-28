import { useEffect, useState } from "react"

export function ThrottleDemo(){


    const [clock, setClock] = useState();

    function GetTime(){
        var now = new Date();
        setClock(now.toLocaleTimeString());
    }

    useEffect(()=>{
        setInterval(GetTime,1000);
    },[])

    return(
        <div>
            <h1 className="text-center">{clock}</h1>
        </div>
    )
}