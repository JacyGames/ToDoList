import React from "react";
import "./ToDoItem.css"
import {ArrowUp} from "../../common/ArrowUp";
import {ArrowDown} from "../../common/ArrowDown";
import {Trash} from "../../common/Trash";
import {Checked} from "../../common/Checked";

const ToDoItem = ({counter, task, done, itsDone, id, deleteItem, upTheTusk, downTheTuck}) => {


    return <div
        className={!done ? "list-group-item list-group-item-action" : "list-group-item list-group-item-action doned"}>
        <ArrowUp upTheTusk={upTheTusk} counter={counter}/>
        <div className={"centered"}>
            <div>{counter}. </div>
            <div>{task}</div>
            <div className={"forTrash"}>
                <Trash deleteItem={deleteItem} id={id}/>
            </div>

            <Checked itsDone={itsDone} id={id}/>

        </div>
        <ArrowDown downTheTuck={downTheTuck} counter={counter}/>
    </div>

}
export default ToDoItem;