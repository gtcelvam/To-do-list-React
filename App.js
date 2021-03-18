import React, { Component } from "react"
import TodoItem from "./TodoItem"
import todoData from "./todoData"

class App extends Component{
    constructor(){
        super()
        this.state = {
            todo : todoData
        }
    }
    render(){
        var todoList = this.state.todo.map((item)=>
                <div>
                    <TodoItem key={item.id} item = {item}/>
                </div>
        )
        return(
            <div className="todo-list">
                <div className='items'>
                    {todoList}
                </div>
            </div>
        )
    }
}

export default App