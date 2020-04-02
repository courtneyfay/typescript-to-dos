import React, { useState, ChangeEvent } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const ToDoForm = (props: { onSubmit: Function, error: string }) => {
  const [todo, setTodo] = useState('');
  const { onSubmit, error } = props;

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    setTodo(value);
  };

  return (
    <div>
      <Typography variant="h4">
        Add a to do:
      </Typography>
      <form>
        <TextField
          label="To do"
          variant="outlined"
          required
          onChange={(e) => handleChange(e)} />
        {error &&
          <Alert severity="error">{ error }</Alert>
        }
        <Button variant="contained" color="primary" onClick={(e) => onSubmit(e, todo)}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ToDoForm;