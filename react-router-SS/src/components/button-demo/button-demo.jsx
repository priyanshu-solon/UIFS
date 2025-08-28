
export function ButtonDemo(){

    function handleDoubleClick(){
        window.open('m1.png', 'Mobile', 'width=400 height=400');
    }

    function handleContextMenu(){
        document.oncontextmenu = function(){
            alert('Right Click Not Allowed');
            return false;
        }
    }

    return(
        <div onContextMenu={handleContextMenu} className="container-fluid">
            <h2>Button Events</h2>
            <img onDoubleClick={handleDoubleClick} src="m1.png" width="150" height="150"/>
            <p>Double Click to view large</p>
        </div>
    )
}