import { useState } from "react"
import Counter from "./Counter"
import FunctionalCounter from "./FunctionalCounter"

export default function ConditionalComponent(){
    const [display, setDisplay] = useState(false)
    if (display){
        return(
            <div>
                <h3>This is a Conditional component</h3>
                <Counter />
            </div>
        )
    } else {
        return(
            <div>
                <h3>There is nothing to see here!</h3>
                <FunctionalCounter />
            </div>
        )
}
    }
    