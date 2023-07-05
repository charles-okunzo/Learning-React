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
    }

    handleLastnameChange = (event)=>{
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.table({
            fname: this.state.firstname,
            lname: this.state.lastname
        })
    }
    render(){
        return (
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.firstname} />
                    <br />
                    <input onChange={this.handleLastnameChange} type="text" value={this.state.lastname} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form