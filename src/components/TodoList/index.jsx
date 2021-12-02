import React from 'react'
import './style.css';
import { IconContext } from "react-icons";
import { BsTrash, BsExclamation } from "react-icons/bs";


const TodoList = ({ todos, onToggleDone, id, done}) => {
    // console.log(object)
    return (
        <ul className="todo-list">
            {todos.map((item, index) => (
                <li className="list-item" key={index}>
                    <span className="list-items-group">
                        <span className="item-label" style={{textDecoration: item.done ? 'line-through' : 'none'}} onClick={() => onToggleDone(item.id)}>{item.label}</span>
                        <span className="item-buttons">
                            <IconContext.Provider value={{ color: "red", size: "1rem",className: "delete-icon" }}>
                                <button className="icon-button"><BsTrash /></button>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "green", size: "1rem", className: "exclamation-icon" }}>
                                <button className="icon-button"><BsExclamation /></button>
                            </IconContext.Provider>
                        </span>

                    </span>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
