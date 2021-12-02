import {useState} from "react";
import "./style.css";

const TodoAddForm = ({addTodo}) => {
  const [todo, setTodo] = useState('');
  
  function onSubmit(event){
      event.preventDefault();
      addTodo(todo);
      setTodo('');
  }

  return (
    <form className="TodoAddForm" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="addInput"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type='submit' className="addItem"> Add Item</button>
    </form>
  );
};

export default TodoAddForm;
