import React,{useRef} from 'react'

function FormHook() {
    let inputel=useRef(null)
    let onClick=(e)=>{
        inputel.current.focus()
    }
    return (
        
        <div>
            <form>
                <input type="text" ref={inputel} placeholder="enter name"></input>
                <button type="button" onClick={onClick}>Focus</button>
            </form>
            
        </div>
    )
}

export default FormHook
