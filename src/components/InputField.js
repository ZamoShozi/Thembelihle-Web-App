import React, {useEffect, useState} from "react";

function InputField(props){
    const [input, setInput] = useState("")
    const textHandler = (event) =>{
        setInput(event.target.value)
    }
    useEffect(()=>{
        setInput(props.value)
    }, [props.value])
    InputField.prototype.value = function () {
        return input
    }
    return(<input className={props.className} type={props.type}  value={input}  onChange={textHandler}/>)
}
export default InputField
