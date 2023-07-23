import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-outline-dark " onClick={() => { onDelete(todo) }}>Delete</button>
                {/* when we only write onDelete then the function will only work when we click on the delete button . but when we call the function - onDelete() then it will automatically render and we will se its action in console log 3 times
             */}
                {/* bow we want it to run on our will and also want to pass todo . therefore we will use arror function */}
            </div>
            <hr />
        </>
    )
}

export default TodoItem
