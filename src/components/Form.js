import { Component } from "react"

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    }
    handleChange = (event)=>{
        this.setState({
            firstname : event.target.value
        })
        console.log(this.state.firstname)
    }

    handleLastnameChange = (event)=>{
        this.setState({
            lastname: event.target.lastname
        })
    }
    render(){
        return (
            <div>
                <h2>Form</h2>
                <form>
                    <input onChange={this.handleChange} type="text" value={this.state.firstname} />
                    <br />
                    <input onChange={this.handleLastnameChange} type="text" value={this.state.lastname} />
                </form>
            </div>
        )
    }
}

export default Form