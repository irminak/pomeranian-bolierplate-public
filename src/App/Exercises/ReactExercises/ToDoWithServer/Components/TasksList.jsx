import React from 'react';

import Task from './Task';
import '../Styles/taskList.css';

const TasksList = (props) => {
  function formatDate(addDate) {
    const date = new Date(addDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }

  return (
    <div className="list">
      <ul>
        {props.data.map((todo) => (
          <Task
            title={todo.title}
            author={todo.author}
            note={todo.note}
            addDate={formatDate(todo.createdAt)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
