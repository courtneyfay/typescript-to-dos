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

  const onSubmit = (e: MouseEvent, todo: string) => {
    e.preventDefault();
  
    if (todo === '') {
      setError('You cannot submit a blank todo');
    } else {
      setTodos([...todos, todo]);
    }
  };

  const onClick = (e: MouseEvent, index: number) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index+1, todos.length)]);
  };

  return (
    <>
      <Typography variant="h2">
          To Do App
        </Typography>
      <ToDoList onClick={onClick} todos={todos} />
      <ToDoForm onSubmit={onSubmit} error={error} />
    </>
  )
};

export default App;
