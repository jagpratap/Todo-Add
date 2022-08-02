import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [input, setInput] = useState({ id: "", value: "" })
    const [todos, setTodos] = useState([])
    const [isComplete, setComplete] = useState(false)
    const [isEdit, setEdit] = useState(false)

    // Todo Form Handlers
    const onChangeHandler = (event) => {
        const { value, name } = event.target
        setInput({ id: name || "", value: value })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        let todo = {};
        let todosTemp = [];
        if (!input.id) {
            todo = {
                id: `id${(new Date()).getTime()}`,
                value: input.value
            }
            todosTemp = [todo, ...todos];
        } else {
            todosTemp = todos.map((keys) => {
                const { id } = keys;
                if (id === input.id) {
                    return { id, value: input.value };
                }
                return keys;
            })

        }
        setTodos(todosTemp);
        setInput({ value: "", id: "" })
        setEdit(false)
    }

    // Todo Item Handlers
    const completedTodo = (id) => {
        const todosTemp = todos.map((todo) => {
            if (todo.id === id) {
                setComplete(prev => !prev)
            }
            return todo
        })
        setTodos(todosTemp)
    }

    const updateTodo = ({ id, value }) => {
        setEdit(prev => !prev)
        setInput({ id, value });
    }
    const removeTodo = (id) => {
        const todosTemp = todos.filter((todo) => todo.id !== id)
        setTodos(todosTemp)
    }

    return (
        <>
            {/**** Todo Title ****/}
            <div className='row'>
                <div className="col todo-title">
                    <i className="bi bi-journal-check todo-title-icon"></i>
                    <p className='todo-title-text'>Todo-s</p>
                </div>
            </div>

            {/**** Todo Input Form ****/}
            <TodoForm
                input={input}
                isEdit={isEdit}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
            />

            <div className="p-2 mx-4 border-bottom"></div>

            {/**** Todo Item List  ****/}
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    isComplete={isComplete}
                    completedTodo={completedTodo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </>
    )
}

export default TodoList




// if (!todo.value || /^\s*$/.test(todo.value)) return;
