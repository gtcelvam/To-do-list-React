import React from "react"
import "./App.css"

const TodoItem = function(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p><hr/>
        </div>
    )
}

export default TodoItem