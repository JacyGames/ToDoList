import React from "react";

const Month = ({setFilter}) => {
    return <div>
        <button className={"btn btn-info"} onClick={setFilter.bind(this, "month")}>MONTH</button>
    </div>
}

export default Month;