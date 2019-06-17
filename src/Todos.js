import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id }>
                    <span>{todo.content}</span>
                    <span className="right link" onClick={() => {deleteTodo(todo.id)}}>Delete</span>
                </div>
            )
        })
    ) : ( <p className="center"> You have no todo's left, yaaa!!!</p> );
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
};

export default Todos;

