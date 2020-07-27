import React from "react";

const Today = ({setFilter}) => {
    return <div>
        <button className={"btn btn-info"} onClick={setFilter.bind(this, "today")}>TODAY</button>
    </div>
}

export default Today;