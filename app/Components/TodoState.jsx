
"use client"
import React from 'react';
import { useState } from 'react';
import TodoContent from "./TodoContent.jsx"
import TodoInput from './TodoInput.jsx'
export default function TodoState() {

// create input and button.
// get value from input 
//submit to data array
//loop the information with a edit delete cta.

//onclick edit - show input with save.
//onclick delete - remove from array.

//state
//main input 
//cta submin main
//edit cta
//on edit input 
//save edit
//delete 

const [todoData,setTodoData]=useState([])  // main data
const [inputValues,SetInputValues]=useState({
mainInput:"" // original input value

})




/*  MAIN TODO INPUT */
const getTextForTodo = (e)=>{
  SetInputValues({ mainInput:e.target.value})

}
 /* submits data to list */
 
const submitTodoItem = ()=>{
  setTodoData( prev => [...todoData,inputValues.mainInput])

}


/* END MAIN TODO INPUT  */


  return (
    <main>
       <h1> Todo List</h1>
      <TodoInput getTextForTodo={getTextForTodo} 
                  submitTodoItem={submitTodoItem}/>
      <TodoContent todoData={todoData} />
    </main>
  );
}