const TodoAdd = ({ input, isEdit, onChangeHandler, onSubmitHandler }) => {
    return (
        <form className="row todo-add-form" onSubmit={onSubmitHandler}>
            <div className="col-10">
                <input
                    type="text"
                    className="form-control todo-add-input"
                    placeholder={isEdit ? 'Update value...' : 'Add new...'}
                    name={input.id}
                    value={input.value}
                    onChange={onChangeHandler}
                    required
                />
            </div>
            <button className="col-auto btn btn-primary todo-add-button">
                {isEdit ? 'Edit' : 'Add'}
            </button>
        </form>
    )
}

export default TodoAdd