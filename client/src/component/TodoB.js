import React,{useState} from 'react'
import useFetch from 'use-http'

function TodoB() {

    let [req,res]=useFetch('https://jsonplaceholder.typicode.com')
    let [todos,setTodos]=useState([])
    let onClick=async (e)=>{
        let initialTodo=await req.get('/todos')
        console.log(initialTodo)
        if(res.ok)setTodos(initialTodo)
    }

    let onClickp= async (e)=>{
        let initialTodo=await req.post('/todos',{
            userId:todos.length+1,
            id:todos.length+1,
            title:'foo and bar',
            completed:false

        
        })
        console.log(initialTodo)
        if(res.ok)setTodos([...todos,initialTodo])
    }
    return (
        <div>
            <div>
                <button type="button" onClick={onClick}>Get Data</button>
                <button type="button" onClick={onClickp}>Add post</button>
            </div>
            <div>
                {todos.map((todo)=>{
                    return <h1 key={todo.id}>{todo.title}</h1>
                })}

            </div>
            
        </div>
    )
}

export default TodoB
