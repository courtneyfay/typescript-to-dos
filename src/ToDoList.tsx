import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = (props: { onClick: Function, todos: string[] }) => {
  const { onClick, todos } = props;
  return (
    <div>
      <Typography variant="h4">
        To Do List
      </Typography>
      <List>
        {todos.map((todo: string, index: number) => {
          return (
            <ListItem key={index} value={todo}>
              <ListItemText primary={ todo } />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={(e) => onClick(e, index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default ToDoList;
