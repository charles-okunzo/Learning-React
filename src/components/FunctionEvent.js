function FunctionEvent(){
    function handleClick(){
        console.log("Button clicked")
    }
return (
    <div>
        <div>Functional Component</div>
        <button onClick = {handleClick}>Click Here</button>
    </div>
)
}

export default FunctionEvent