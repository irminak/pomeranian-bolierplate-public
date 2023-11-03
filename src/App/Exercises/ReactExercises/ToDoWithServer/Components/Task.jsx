import React from 'react';
import '../Styles/task.css';
import { TrashTodoIcon } from '../../../../Components/Icons/TrashTodoIcon';
import { EditTodoIcon } from '../../../../Components/Icons/EditTodoIcon';
import { DoneTodoIcon } from '../../../../Components/Icons/DoneTodoIcon';

const Task = (props) => {
  return (
    <li className={props.isDone ? 'done' : ''}>
      <div className="task_icons">
        <div className="icon" onClick={props.markAsChecked}>
          <DoneTodoIcon />
        </div>
        <div className="icon" onClick={props.editTask}>
          <EditTodoIcon />
        </div>
        <div className="icon" onClick={props.removeTask}>
          <TrashTodoIcon />
        </div>
      </div>
      <h2>{props.title}</h2>
      <address>{props.author}</address>
      <time>{props.addDate}</time>
      <p className="task">{props.note}</p>
    </li>
  );
};

export default Task;
