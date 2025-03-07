import { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';
const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []); // here it is done this to store and getitem from the localstorage 


    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        // console.log(inputText);
        const newTodo  = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodoList((prev) => [...prev, newTodo] );
        inputRef.current.value = "";
    }

    const deleteTodo = (id) =>{
        setTodoList((prevTodos) => {
           return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    // this logic will toggle tick and not_tick button
    const toggle = (id) => {
        setTodoList((prevTodo) => {
            return prevTodo.map((todo) => {
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList) )
    }, [todoList])

    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-md">

            <div className="flex items-center justify-center mt-7 gap-2">
                <img className='w-8' src={todo_icon} alt="" />
                <h1 className="text-3xl font-semibold">To-Do-List</h1>
            </div>

            <div className='flex items-center my-6 bg-gray-300 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium'>ADD +</button>
            </div>

            {/* -------------todo list------------- */}

            <div>

                { todoList.map((item, index) => {
                    return  <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
                })}
              
            </div>

        </div>
    )
}

export default Todo