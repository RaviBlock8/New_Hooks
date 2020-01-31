import React from 'react'
import useFetch from 'use-http'

function Todolist() {
    const options={
        data:[]
    }
    let {loading,error,data}=useFetch('https://jsonplaceholder.typicode.com/todos',options,[])
    console.log(data)
    
    
    return (
        <>
            <h1>Todo list</h1>
            {error && 'Error'}
            {loading && 'loading..'}
            {data && data.map((todo)=>{
                return <h1 key={todo.id}>{todo.title}</h1>
            })}
        </>
    )
}

export default Todolist
