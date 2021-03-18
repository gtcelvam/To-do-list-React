import React, { Component } from "react"
import TodoItem from "./TodoItem"
import todoData from "./todoData"

class App extends Component{
    constructor(){
        super()
        this.state = {
            todo : todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id){
       this.setState((prevState)=>{
            const todoChange = prevState.todo.map((item)=>{
                if(item.id==id){
                    item.completed = !item.completed
                }
                return prevState
            });

            return todoChange
        })
    }
    render(){
        var todoList = this.state.todo.map((item)=>
                <div>
                    <TodoItem key={item.id} item = {item} handleChange= {this.handleChange}/>
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