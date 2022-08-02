const TodoItem = ({ todo, isComplete, completedTodo, updateTodo, removeTodo }) => {
    return (
        <div className="row todo-item">
            <div className='col-auto todo-item-check' onClick={() => completedTodo(todo.id)}>
                <i
                    className={isComplete ? 'bi bi-check-square' : 'bi bi-square'}
                    data-toggle='tooltip'
                    title={isComplete ? 'Set as Active' : 'Mark as Completed'}
                >
                </i>
            </div>
            <div className='col-9 todo-item-text' onClick={() => completedTodo(todo.id)}>
                <div
                    className={isComplete ? 'text-secondary' : 'text-dark'}
                    style={{ textDecoration: `${isComplete ? 'line-through' : 'none'}` }}
                >
                    {todo.value}
                </div>
            </div>
            <div className='col-auto todo-item-actions'>
                <div className='row'>
                    <div className='col' onClick={() => updateTodo({ id: todo.id, value: todo.value })}>
                        <i className='bi bi-pencil-fill text-primary todo-item-edit' data-toggle="tooltip" title="Edit todo"></i>
                    </div>
                    <div className='col' onClick={() => removeTodo(todo.id)}>
                        <i className='bi bi-trash text-danger todo-item-delete' data-toggle="tooltip" title="Delete todo"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem