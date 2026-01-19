export default function Page({ 
  todoData,
  editToDOInput,
  editModeKey,
  editedToDoValue,
  editTempValue,
  saveEdits,
  cancelEdit,
  deleteTodo
}) {

  return (
    <main>
      <ul>
{ todoData && todoData.length > 0 ?  todoData.map( (item,index) =>  (

  <li key={item.id}> 
    { item.id === editModeKey ? 
    
    (<> <input type="text" 
          // onBlur={editToDOInput}  
          // autoFocus 
          onChange={editedToDoValue}  
          value={editTempValue}/>
          
       <button onClick={()=>saveEdits(item.id)}> Save</button> 
        <button onClick={cancelEdit}> cancel</button> 
       </>) 
       
       
       : 
       (  <>   {item.name}

        <button  className="rounded-sm bg-indigo-500/20 px-2 py-1 text-sm font-semibold text-blackhover:bg-indigo-500/30" onClick={()=>editToDOInput(item.id)}>Edit</button>
        <button  className="rounded-sm bg-[red] px-2 py-1 text-sm font-semibold text-white hover:bg-indigo-500/30"  onClick={()=>deleteTodo(item.id)}>Delete</button> 
       </>
       )  
}
       
        </li> 
       
      )) : <p>no list</p>
    
    }
    
    
    

   </ul>
    </main>
  );

}