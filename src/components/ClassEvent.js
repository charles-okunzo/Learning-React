import { Component } from "react";

class ClassEvent extends Component {
    handleClick(){
        console.log("This is class based event handling")
    }
    render(){
        return (
            <div>
                <div>This is a Class Component</div>
                <button onClick={this.handleClick}>CLick Here</button>
            </div>
        )
    }
}

export default ClassEvent