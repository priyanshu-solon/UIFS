import axios from "axios";
import { useEffect, useState } from "react";
import './mouse-demo.css';

export function MouseDemo()
{
    const [mobiles, setMobiles] = useState([{img_src:null}]);
    const [previewSrc, setPreviewSrc] = useState('m1.png');

    useEffect(()=>{

        axios.get('mobiles.json')
        .then(response=>{
            setMobiles(response.data);
        })

    },[]);

    function handleMouseOver(e){
        setPreviewSrc(e.target.src);
    }

    return(
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-1">
                  {
                    mobiles.map(mobile=><div className="my-4 container-style">
                        <img onMouseOver={handleMouseOver} src={mobile.img_src} key={mobile.img_src} width='50px' height='50px' />
                    </div>)
                  }
                </div>
                <div className="col-11">
                    <img width="400" height="400" src={previewSrc} />
                </div>
            </div>
        </div>
    )
}