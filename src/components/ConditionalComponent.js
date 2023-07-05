import { useState } from "react"
import Counter from "./Counter"
import FunctionalCounter from "./FunctionalCounter"

export default function ConditionalComponent(){
    const [display, setDisplay] = useState(false);
    // let output; // initialise an element variable
    // if (display){
    //     output = <h3>This is a Conditional component</h3>
    // } else {
    //     output = <h3>There is nothing to see here!</h3>
    // }
    // return (
    //     <div>
    //         {output}
    //     </div>
    // )

    return display ? 
    <div>
        <h3>This is a Conditional component</h3>
    </div> : 
    <div>
        <h3>There is nothing to see here!</h3>
    </div> ; // conditional rendering using ternary operater
} 