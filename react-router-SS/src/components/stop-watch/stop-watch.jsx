import { useRef, useState } from "react"

export function StopWatch(){

    const [hrs, setHours] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [milliSec, setMilliSec] = useState(0);

    let thread = useRef(null);
   
        var ms = 0;
        var s = 0;
        var m = 0;
        var h = 0;
    function StartTimer(){
        
        ms++;
        setMilliSec(ms);
        if(ms===999){
            s++;
            setSec(s);
            ms=0;
        }
    }

    function handleStartClick(){
       thread.current = setInterval(StartTimer,1);
    }

    function handleClearClick(){
        clearInterval(thread.current);
        setMilliSec(0);
        setSec(0);
        setMin(0);
        setHours(0);
    }

    return(
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-center">
                <div className="w-50 fs-4">
                    <div className="row">
                    <div className="col p-3 border border-1">
                        <span> {hrs} h</span>
                    </div>
                     <div className="col p-3 border border-1">
                        <span> {min} m</span>
                    </div>
                     <div className="col p-3 border border-1">
                        <span> {sec} s</span>
                    </div>
                     <div className="col p-3 border border-1">
                        <span> {milliSec} ms</span>
                    </div>
                    </div>
                     <div className="mt-3">
                        <button onClick={handleStartClick} className="btn btn-primary">Start</button>
                        <button onClick={handleClearClick} className="btn mx-2 btn-secondary">Clear</button>
                     </div>
                    </div>
            </div>
        </div>
    )
}