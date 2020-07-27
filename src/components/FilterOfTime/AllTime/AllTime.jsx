import React from 'react'

const AllTime = ({setFilter}) => {
    return <div>
        <button className={"btn btn-info"} onClick={setFilter.bind(this, "allTime")}>ALL TIME</button>
    </div>
}

export default AllTime;
