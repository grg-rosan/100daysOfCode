import React, { useState } from "react";

function Interface() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  
  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, {id:Date.now(), text:todo}]);
    setTodo("");
  };

  const deleteItem =(idToDelete)=>{
    setTodos(todos.filter((list)=>(list.id !== idToDelete)))
  }

  return (
    <>
      <div className="main-container">
        <input
          onChange={(input) => setTodo(input.target.value)}
          type="text"
          className="text-field"
          value={todo}
        />
        <button onClick={addTodo}>add</button>

        <div className="todo-list">
          {todos.map(item => (
            <li key={item.id}>
                {item.text} 
                <button onClick={()=>deleteItem(item.id)}>delete</button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
export default Interface;
