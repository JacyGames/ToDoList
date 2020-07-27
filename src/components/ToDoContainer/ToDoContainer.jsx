import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import InputTask from "../InputTask/InputTask";
import FilterOfTime from "../FilterOfTime/FilterOfTime";

class ToDoContainer extends React.Component {

    state = {
        filter: "allTasks",
        todoList: [
            {counter: 1, task: "You can write your tasks", id: 1, done: false, time: "allTime"},
            {counter: 2, task: "Place holder", id: 2, done: false, time: "allTime"}
        ],
        inputAreaValue: "hello",
        checkBoxes: {
            allTime: true,
            today: false,
            week: false,
            month: false
        }

    }

    downTheTuck = (counter) => {
        if (counter === this.state.todoList.length) {
            return;
        }
        this.setState((state) => {
            const newtodoList = state.todoList.concat(),
                currentItem = newtodoList[counter - 1],
                nextItem = newtodoList[counter];


            newtodoList[counter] = currentItem;
            newtodoList[counter - 1] = nextItem;
            newtodoList[counter].counter = counter + 1;
            newtodoList[counter - 1].counter = counter;


            return {...state, todoList: [...newtodoList]}
        })


    }


    upTheTusk = (counter) => {
        if (counter === 1) {
            return;
        }

        this.setState((state) => {
            const newtodoList = state.todoList.concat(),
                prevItem = newtodoList[counter - 2],
                curretnItem = newtodoList[counter - 1];

            newtodoList[counter - 2] = curretnItem;
            newtodoList[counter - 1] = prevItem;
            newtodoList[counter - 2].counter = counter - 1;
            newtodoList[counter - 1].counter = counter;

            return {...state, todoList: [...newtodoList]}
        })

    }

    setFilter = (text) => {
        this.setState((state) => {
            return {...state, filter: text}
        })
    }


    formSubmit = () => {
        this.addItem()
        console.log(this.state);
    }

    onCheckBoxChange = (e) => {
        const boolean = !!e.target.value;
        const name = e.target.name;
        this.setState((state) => {
            return {
                ...state, checkBoxes: {
                    allTime: false,
                    today: false,
                    week: false,
                    month: false,
                    [name]: boolean
                }
            }
        })
    }

    onInputChange = (e) => {
        const text = e.target.value;
        this.setState((state) => {
            return {...state, inputAreaValue: text}
        })
    }

    itsDone = (id) => {
        this.setState((state) => {
            const clonelist = state.todoList.concat();
            clonelist.map(item => {
                if (item.id === id) {
                    if (item.done) {
                        item.done = false;
                        return item;
                    }
                    item.done = true;
                    return item;
                }
                return item;
            });
            return {...state, todoList: [...state.todoList]}
        })

    }

    deleteItem = (id) => {
        this.setState((state) => {
            return {...state, todoList: [...state.todoList.filter(item => !(id === item.id))]}

        })
    }

    addItem = () => {
        this.setState((state) => {
            const counter = state.todoList.length + 1;
            const timeTasks = Object.entries(state.checkBoxes);
            const timeExact = timeTasks.filter(item => item[1]);
            return {
                ...state, todoList: [...state.todoList, {
                    counter: counter,
                    task: this.state.inputAreaValue, id: counter, done: false, time: timeExact[0][0]
                }],
                inputAreaValue: ""
            }
        })
    }

    render() {
        const items = this.state.todoList.filter(item => {
            if (this.state.filter === "allTasks") {
                return item
            }
            if (item.time === this.state.filter) {
                return item;
            }
        }).map(item => {
            return <ToDoItem key={item.id} counter={item.counter}
                             task={item.task} done={item.done}
                             itsDone={this.itsDone} id={item.id} deleteItem={this.deleteItem}
                             upTheTusk={this.upTheTusk}
                             downTheTuck={this.downTheTuck}
            />
        });


        return <div>
            <FilterOfTime setFilter={this.setFilter}/>
            <div className="list-group">

                {items}
            </div>

            <InputTask addItem={this.addItem} inputvalue={this.state.inputAreaValue} onInputChange={this.onInputChange}
                       onCheckBoxChange={this.onCheckBoxChange} checkBoxes={this.state.checkBoxes}
                       formSubmit={this.formSubmit}/>
        </div>
    }
}

export default ToDoContainer;