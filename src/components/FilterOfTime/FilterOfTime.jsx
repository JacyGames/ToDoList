import React from "react";
import "./FilterOfTime.css"
import AllTime from "./AllTime/AllTime";
import Month from "./Month/Month";
import Week from "./Week/Week";
import Today from "./Today/Today";
import AllTasks from "./AllTasks/AllTasks";

const FilterOfTime = ({setFilter}) => {
    return <div className="filterMain">

        <AllTime setFilter={setFilter}/>
        <Month setFilter={setFilter}/>
        <Week setFilter={setFilter}/>
        <Today setFilter={setFilter}/>
        <AllTasks setFilter={setFilter}/>
    </div>
}

export default FilterOfTime;