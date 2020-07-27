import React from 'react'

const AllTasks = ({setFilter}) => {
    return <div>
        <button className={"btn btn-info"} onClick={setFilter.bind(this, "allTasks")}>ALL TASKS</button>
    </div>
}

export default AllTasks;
