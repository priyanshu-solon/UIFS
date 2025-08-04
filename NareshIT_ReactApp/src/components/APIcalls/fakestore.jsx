import axios from "axios";
import { useEffect, useState, useRef } from "react";

export function CarouselDemo() {
    const [product, setProduct] = useState({
        id: 0,
        title: null,
        description: null,
        image: null,
        category: null,
        price: 0,
        rating: { rate: 0, count: 0 }
    });

    const [productId, setProductId] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef(null); // To store setInterval ID

    // Load product when productId changes
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => setProduct(response.data));
    }, [productId]);

    // Clean up interval when unmounting or stopping
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    function handleNextClick() {
        setProductId(prev => (prev < 20 ? prev + 1 : 1)); // wrap around
    }

    function handlePreviousClick() {
        setProductId(prev => (prev > 1 ? prev - 1 : 20)); // wrap around
    }

    function handleSeekbarChange(e) {
        setProductId(Number(e.target.value));
    }

    function handlePlay() {
        if (!isPlaying) {
            setIsPlaying(true);
            intervalRef.current = setInterval(() => {
                setProductId(prev => (prev < 20 ? prev + 1 : 1));
            }, 2000); // change every 2 seconds
        }
    }

    function handlePause() {
        setIsPlaying(false);
        clearInterval(intervalRef.current);
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card w-50 p-2 mt-4">
                <div className="card-header text-center">{product.title}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePreviousClick} className="btn btn-dark bi bi-chevron-left"></button>
                        </div>
                        <div className="col-10">
                            <img src={product.image} width="100%" height="400" alt={product.title} />
                            <div className="mt-2">
                                <input
                                    type="range"
                                    onChange={handleSeekbarChange}
                                    min="1"
                                    max="20"
                                    value={productId}
                                    className="form-range"
                                />
                            </div>
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button
                        onClick={handlePlay}
                        disabled={isPlaying}
                        className="btn btn-success bi bi-play"
                        title="Play"
                    ></button>
                    <button
                        onClick={handlePause}
                        disabled={!isPlaying}
                        className="btn btn-danger mx-2 bi bi-pause"
                        title="Pause"
                    ></button>
                </div>
            </div>
        </div>
    );
}
