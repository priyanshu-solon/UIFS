import axios from "axios";
import { useEffect, useState } from "react";
import "./mouse-demo.css";

export function EventBindingT() {
  const [uname, setUname] = useState("John");
  const [msg, setMsg] = useState(null);
  const [mobiles, setMobiles] = useState([{ img_src: null }]);
  const [previewSrc, setPreviewSrc] = useState("omg1.png");
  const [styleObj, setStyleObj] = useState({
    animationName: 'Spin',
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  });
  const [imgPosition, setImgPosition] = useState({
    position: null,
    top: null,
    left: null
  });
  
  function handleDoubleClick() {
    window.open('omg1.png', 'Mobile', 'width=400 height=400');
  }

  function handleContextMenu() {
    document.oncontextmenu = function () {
      alert('Right Click Not Allowed');
      return false;
    };
  }

  function handleNameChange(e) {
    setUname(e.target.value);
  }
  function VerifyName(e) {
    if (e.target.value === "David") {
      setMsg("Name Taken - Try another");
    } else {
      setMsg("Name Available");
    }
  }

  function handleBlur() {
    setMsg("");
  }
  
  function handleMouseOver(e) {
    setPreviewSrc(e.target.src);
  }
  
  function handleMouseDown() {
    setStyleObj({
      animationName: 'Spin',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    });
  }

  function handleMouseUp() {
    setStyleObj({
      animationName: 'Spin',
      animationDuration: '5s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    });
  }

  function handleMouseMove(e) {
    setImgPosition({
      position: 'fixed',
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    });
  }

  useEffect(() => {
    axios.get("mobiles.json").then((response) => {
      setMobiles(response.data);
    });
  }, []);


  return (
    <div className="container-fluid">
      <dl>
        <dt>User Name</dt>
        <dd>
          <input
            type="text"
            onBlur={handleBlur}
            onKeyUp={VerifyName}
            onChange={handleNameChange}
            value={uname}
          />
        </dd>
        <dd>{msg}</dd>
      </dl>
      <h2>Hello ! {uname}</h2>

      <br />

      <div className="row mt-5">
        <div className="col-1">
          {mobiles.map(mobile => (
            <div key={mobile.img_src} className="my-4 container-style">
              <img
                onMouseOver={handleMouseOver}
                src={mobile.img_src}
                width="50px"
                height="50px"
              />
            </div>
          ))}
        </div>
        <div className="col-11">
          <img width="400" height="400" src={previewSrc} />
        </div>
      </div>

      <br />

      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div>
        <img
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={styleObj}
          src="react.svg"
          width="200"
          height="200"
        />
      </div>
    </div>

    <br />

    <div onContextMenu={handleContextMenu} className="container-fluid">
      <h2>Button Events, Right Click not allowed</h2>
      <img onDoubleClick={handleDoubleClick} src="omg1.png" width="150" height="150" />
      <p>Double Click to view large</p>
    </div>
    </div>
  );
}
