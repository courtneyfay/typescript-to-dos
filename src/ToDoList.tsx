import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ToDoList = (props: any) => {
  const { todos } = props;
  return (
    <div>
      <Typography variant="h4">
        To Do List
      </Typography>
      <List>
        {todos.map((todo: any, index: number) => {
          console.log('todo', todo, 'index', index);
          return (
            <ListItem key={index} value={todo}>
              <ListItemText primary={ todo } />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default ToDoList;
