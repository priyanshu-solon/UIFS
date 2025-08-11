
import { useState } from "react"
import { EMICalculator } from "../Event-Binding/emiCalc";
import { CarouselDemo } from "../APIcalls/fakestore";

export function ConditionDemo(){

    const [view, setView] = useState(null);

    function handleEmi(){
        setView(<EMICalculator />);
    }
    function handleCarousel(){
        setView(<CarouselDemo />)
    }

    return(
        <div className="container-fluid">
            <h2>Home</h2>
            <button onClick={handleEmi} className="btn btn-primary">EMI Calculator</button>
            <button onClick={handleCarousel} className="btn btn-warning mx-2">Carousel</button>
            <hr />
            <div>
                {view}
            </div>
        </div>
    )
}