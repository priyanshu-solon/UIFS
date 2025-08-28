import { useState } from "react";
import './mouse-animation.css';

export function MouseAnimation(){

    const [styleObj, setStyleObj] = useState({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'})

    function handleMouseDown(){
        setStyleObj({animationName:'Spin', animationDuration:'1s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handleMouseUp(){
        setStyleObj({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
                <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={styleObj} src="react.svg" width="200" height="200" />
            </div>
        </div>
    )
}