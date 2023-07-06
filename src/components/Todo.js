import { useState } from "react"
import ListItem from "./ListItem"


export default function Todo(){
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleTodo = (event)=>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo)
        setTodoList(tempList)
        console.log(tempList)
        setTodo("")
    }

    return(
        <div>
            <h2>Todo</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTodo} type="text" value={todo} />
                <button type="submit">Add</button>
            </form>

            <h3>Todo Items</h3>
            {todoList.map((item, index)=>(
                <ListItem key={index} name={item} />
            ))}
        </div>
    )
}