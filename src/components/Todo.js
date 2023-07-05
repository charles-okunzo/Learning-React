import { useState } from "react"


export default function Todo(){
    const [todo, setTodo] = useState("")

    const handleTodo = (event)=>{
        setTodo(event.target.value)
        console.log(todo)
    }
    return(
        <div>
            <h2>Todo</h2>
            <form>
                <input onChange={handleTodo} type="text" value={todo} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}