import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { EMICalculator } from "../components/Event-Binding/emiCalc";
import { CarouselDemo } from "../components/APIcalls/fakestore";


export function PortfolioIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="text-center">
                    <div className="fs-2"> John </div>
                    <div className="fs-5"> React Developer </div>   
                    <div className="fs-5"> My Projects </div> 
                    <nav>
                        <span> <Link to="/">Home</Link> </span>
                        <span className="mx-5"> <Link to="/emi"> EMI Calculator </Link> </span>
                        <span> <Link to="/carousel"> Carousel  </Link> </span>
                    </nav>
                </header>            
                <section>
                    <Routes>
                        <Route path="/" element={<div>Hello ! I am John React Developer.</div>} />
                        <Route path="emi" element={<EMICalculator />} />
                        <Route path="carousel" element={<CarouselDemo />} />
                        <Route path="*" element={<div><h3>Requested Path Not Found </h3></div>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}