import React from "react";

const Week = ({setFilter}) => {
    return <div>
        <button className={"btn btn-info"} onClick={setFilter.bind(this, "week")}>WEEK</button>
    </div>
}

export default Week;