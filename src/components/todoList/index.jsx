import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos : PropTypes.array,
    onTodoClick : PropTypes.func,
};

TodoList.defaultProps = {
    todos : [],
    onTodoClick : null
};

function TodoList(props) {

    function handleClick(todo) {
        if(onTodoClick){ // vì onTodoClick đang null nên phải kt điều kiện và truyền props là mảng vào
            onTodoClick(todo);
        }
    }
    const {todos, onTodoClick } = props;
    return (
        <ul className="todo-list" >
            {todos.map((todo) => ( // truyền mảng từ todos sang todo
                <li key={todo.id} onClick={() => {handleClick(todo)}}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;