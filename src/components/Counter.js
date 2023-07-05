import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            //this.increment = this.increment.bind(this) //first recommended method of binding the this keyword.
        };
    }

    increment = ()=> { //second recommended method of binding the this keyword is using arrow function
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement(){
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <div>
                <h3>Count value is: {this.state.counter} </h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={()=> this.decrement()}>Decrement</button> {/*Third recommended method of binding the this keyword is using arrow function in the event call */}
            </div>
        )
       
    }
}

export default Counter