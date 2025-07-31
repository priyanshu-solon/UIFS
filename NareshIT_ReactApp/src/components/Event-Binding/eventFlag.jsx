import { useState } from "react";

export function MouseMove() {
  const [imgPosition, setImgPosition] = useState({
    position: null,
    top: null,
    left: null
  });

  function handleMouseMove(e) {
    setImgPosition({
      position: 'fixed',
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    });
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <div style={{ height: '1000px' }}>
        <h1>Move your mouse pointer to test</h1>
      </div>
      <img style={imgPosition} width="50" height="50" src="flag.gif" />
    </div>
  );
}
