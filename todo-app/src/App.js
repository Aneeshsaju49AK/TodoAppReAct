import React from 'react';
import './App.css';
import { useState } from 'react'
function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  return (
    <div className="App">
      <div className='mainHeading'>
        <h1>ToDo List</h1>


      </div>
      <div className="subHeading">
        <h2>whoop. It's Wendnesday </h2>

      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder=" Add item.." />
        <i onClick={() => setTodos([...toDos, {id:Date.now(), text: toDo, status:false}])} className="fas fa-plus"></i>

      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setTodos(toDos.filter(value2=>{
                    if(value2.id == value.id){
                      value2.status=e.target.checked
                    }
                    return value2
                  }))
console.log(e.target.value)
                }} value={value.status} type="checkbox" name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          )
        })

        }
        {
          toDos.map((val)=>{
            if(val.status){
              return (<h1>{val.text}</h1>)
            }
            return null
          })
        }

      </div>
    </div>
  );
}

export default App;
