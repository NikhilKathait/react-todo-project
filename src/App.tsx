import React, {useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription: 'Feed dogs', rowAssigned: 'Alice'},
    {rowNumber:2, rowDescription: 'Learn React', rowAssigned: 'Nikhil'},
    {rowNumber:3, rowDescription: 'Buy Groceries', rowAssigned: 'Bob'},
    {rowNumber:4, rowDescription: 'Get Haircut', rowAssigned: 'Charlie'},
  ])

  const addTodo = (description: string, assigned: string)  => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });

    setTodos(filtered);
  }

return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <h1>Todo App</h1>
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button onClick={() => setShowNewTodoForm(!showNewTodoForm )}
            className='btn btn-primary mt-3'>
            {showNewTodoForm ? 'Close Todo Form' : 'Add New Todo'}
          </button>
          {
            showNewTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}
