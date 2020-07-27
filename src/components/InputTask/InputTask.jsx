import React from "react";
import "./InputTask.css"

const InputTask = ({addItem, inputvalue, onInputChange, onCheckBoxChange, checkBoxes, formSubmit}) => {
    const customSubmit = (e) => {
        e.preventDefault();

    }


    return <div>

        <form onSubmit={customSubmit}>
            <div className={"input-group mb-3"}>
                <input className="form-control" value={inputvalue} onChange={onInputChange.bind(this)} type="text"/>
                <div className={"centered"}>
                    <button className="btn btn-outline-secondary" onClick={formSubmit}>SUBMIT</button>
                </div>
            </div>
            <div className={"centered"}>
                <div className={"marginR"}>
                    All time:  <input checked={checkBoxes.allTime} name={"allTime"} onChange={onCheckBoxChange.bind(this)} type="checkbox"/>
                </div>
                <div className={"marginR"}>
                    Today: <input checked={checkBoxes.today} name={"today"} onChange={onCheckBoxChange.bind(this)} type="checkbox"/>
                </div>
                <div className={"marginR"}>
                    Week: <input checked={checkBoxes.week} name={"week"} onChange={onCheckBoxChange.bind(this)} type="checkbox"/>
                </div>
                <div>
                    Month: <input checked={checkBoxes.month} name={"month"} onChange={onCheckBoxChange.bind(this)} type="checkbox"/>
                </div>
            </div>


        </form>

    </div>
}

export default InputTask;