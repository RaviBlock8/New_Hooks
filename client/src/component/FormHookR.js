//this uses react-use-form-state

import React from 'react'
import {useFormState} from 'react-use-form-state'

function FormHookR() {
    let [formState,{text,email,password,radio,checkbox,select}]=useFormState()
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(`firstname:${formState.values.firstname}`)
        console.log(`password:${formState.values.password}`)
        console.log(`email:${formState.values.email}`)
        console.log(`course:${formState.values.course}`)
        console.log(`Additional Course:${formState.values.additional}`)
        console.log(`Account:${formState.values.account}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...text('firstname')}/>
                <input {...password('password')}/>
                <input {...email('email')}/>
                <label>msc</label>
                <input {...radio('course','msc')}/>
                <label>mca</label>
                <input {...radio('course','mca')}/><br/>
                <label>Choose additional course</label>
                IT:<input {...checkbox('additional','IT')}/>
                Home Science:<input {...checkbox('additional','Home science')}/>
                Coding:<input {...checkbox('additional','coding')}/><br/>
                <select {...select('account')}>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default FormHookR
