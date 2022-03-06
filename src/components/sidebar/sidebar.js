import React from "react";

const Sidebar = (props) => {
    return (
        <div className={!props.open}>
            <div className="h-full bg-white w-3/5">hello</div>
        </div>
    )
}

export default Sidebar