import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';



const App = () => {
  const [error, setError] = useState('');
  const defaultTodos = [
    'Buy groceries',
    'Mow lawn',
    'Sort mail',
  ];
  const [todos, setTodos] = useState(defaultTodos);

  const onSubmit = (e: any, todo: string) => {
    e.preventDefault();
    console.log('onSubmit', todo, typeof(todo));
  
    if (todo === '') setError('You cannot submit a blank todo');
    todos.push(todo);

    setTodos(todos);
  };

  return (
    <>
      <Typography variant="h2">
          To Do App
        </Typography>
      <ToDoList todos={todos} />
      <ToDoForm onSubmit={onSubmit} error={error} />
    </>
  )
};

export default App;
